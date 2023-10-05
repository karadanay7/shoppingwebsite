<template>
  <MainLayout>
    <Loading v-if="isLoading" />
    <div class="min-h-screen bg-gray-50 pt-28">
      <div class="flex flex-col overflow-x-auto">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead
                  class="border-b bg-orange-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
                >
                  <tr>
                    <th scope="col" class="px-6 py-4">Order ID</th>
                    <th scope="col" class="px-6 py-4">Name</th>
                    <th scope="col" class="px-6 py-4">Address</th>
                    <th scope="col" class="px-6 py-4">Items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b dark:border-neutral-500"
                    v-for="order in orders"
                    :key="order.id"
                  >
                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                      {{ order.id }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ order.name }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ order.address }},{{ order.zipcode }},{{ order.city }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <ul v-if="order.orderItems">
                        <li
                          v-for="orderItem in order.orderItems"
                          :key="orderItem.id"
                        >
                          {{ orderItem.product.id }}
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const ordersResponse = await useFetch("/api/prisma/get-all-orders");
const orders = ordersResponse?.data?.value;

for (const order of orders) {
  const orderItemsResponse = await useFetch(
    `/api/prisma/get-order-items-by-order/${order.id}`
  );
  const orderItems = orderItemsResponse?.data?.value;
  order.orderItems = orderItems;
}
</script>
