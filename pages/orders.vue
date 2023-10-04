<template>
  <MainLayout>
    <div
      id="OrdersPage"
      class="min-h-screen mx-auto px-2 pt-28 text-gray-800 bg-gray-50"
    >
      <div class="flex items-center text-xl pl-4">
        <Icon name="carbon:delivery" color="#f97316" size="35" />
        <span class="pl-4 pt-4">Orders</span>
      </div>
      <template v-if="orders && orders.data?.length">
        <div v-for="order in orders.data" :key="order.id" class="text-sm pl-4">
          <div class="border-b py-1">
            <div class="pt-2"></div>

            <div v-for="item in order.orderItem">
              <NuxtLink
                class="flex items-center gap-3 p-1 hover:underline hover:text-orange-500"
                :to="`/shop/${item.productId}`"
              >
                <nuxt-img
                  width="100"
                  :src="item.product.image"
                  alt="producturl"
                  title="item"
                />
                {{ item.product.title }}
              </NuxtLink>
            </div>

            <div class="pt-2 pb-5">
              Delivery Address: {{ order.name }}, {{ order.address }},
              {{ order.zipcode }}, {{ order.city }}, {{ order.country }}
            </div>
            <div class="pt-2 pb-5">
              Created time:
              {{ dateFormatter(order.created_at) }}
              <!-- {{ new Date(order.created_at).toISOString().slice(0, 10) }} at
              {{ new Date(order.created_at).toISOString().slice(11, 16) }} -->
            </div>
          </div>
        </div>
      </template>
      <div v-else class="flex items-center justify-center">
        You have no order history
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const user = useSupabaseUser();

let orders = ref(null);

const dateFormatter = (d) => {
  const date = new Date(d)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join("-");
  const hours = new Date(d).toISOString().slice(11, 16);

  return `${date} at ${hours}`;
};

onBeforeMount(async () => {
  orders.value = await useFetch(
    `/api/prisma/get-all-orders-by-user/${user.value.id}`
  );
});

onMounted(() => {
  if (!user.value) {
    return navigateTo("/auth");
  }

  setTimeout(() => (userStore.isLoading = false), 200);
});
</script>
