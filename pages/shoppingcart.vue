<template>
  <MainLayout>
    <div
      id="ShoppingCartPage"
      class="w-full min-h-screen mx-auto px-2 bg-gray-50 text-gray-600"
    >
      <div
        v-if="!userStore.cart.length"
        class="h-[500px] flex items-center justify-center text-gray-600"
      >
        <div class="pt-20">
          <Icon
            name="pepicons-pop:cart-off"
            size="150"
            class="text-orange-500 ml-6 shrink-0"
          />

          <div class="text-xl text-center mt-4">No items yet?</div>
          <NuxtLink to="/shop" class="text-2xl text-center text-orange-500"
            >Click for Shopping!
            <Icon
              name="heroicons-solid:cursor-click"
              size="32"
              class="text-orange-500 mb-2 shrink-0"
          /></NuxtLink>

          <div v-if="!user" class="flex text-center">
            <NuxtLink
              to="/auth"
              class="bg-text-orange-500 w-full text-gray-50 text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        v-else
        class="md:flex gap-4 justify-between mx-auto w-full pt-36 text-gray-600"
      >
        <div class="md:w-[65%]">
          <div class="bg-gray-50 rounded-lg pl-5">
            <div class="text-2xl font-bold mb-2">
              Shopping Cart ({{ userStore.cart.length }})
            </div>
          </div>

          <div id="Items" class="rounded-lg sm:p-4 mt-4">
            <ul v-for="product in userStore.cart">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </ul>
          </div>
        </div>

        <div class="md:hidden block my-4" />
        <div class="md:w-[35%]">
          <div id="Summary" class="rounded-lg p-5">
            <p class="text-orange-500 text-xl font-semibold pt-1">
              Free 11-day delivery over $40
            </p>
            <div class="text-2xl font-bold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              type="submit"
              @click="goToCheckout()"
              class="flex items-center justify-center bg-orange-500 w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
              id="checkout"
              aria-label="checkout"
            >
              Checkout
            </button>
          </div>

          <div class="text-lg font-semibold mb-4 pl-5">Payment methods</div>
          <div class="flex items-center justify-start gap-8 my-4 pl-5">
            <div v-for="card in cards">
              <img class="h-6" :src="card" alt="card" title="card" />
            </div>
          </div>

          <div class="border-b" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const user = useSupabaseUser();
const router = useRouter();

let selectedArray = ref([]);

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200);
});

const cards = ref(["visa.png", "mastercard.png", "paypal.png", "applepay.png"]);

const totalPriceComputed = computed(() => {
  let price = 0;
  userStore.cart.forEach((prod) => {
    price += prod.price;
  });
  return price / 100;
});

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e);
    return;
  }

  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e);
    } else {
      selectedArray.value.splice(index, 1);
    }
  });
};

const goToCheckout = () => {
  let ids = [];
  userStore.checkout = [];

  selectedArray.value.forEach((item) => ids.push(item.id));

  let res = userStore.cart.filter((item) => {
    return ids.indexOf(item.id) != -1;
  });

  res.forEach((item) => userStore.checkout.push(toRaw(item)));

  router.push("/checkout");
};
</script>
