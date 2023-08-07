<template>
  <MainLayout>
    <div class="px-4 py-8 bg-rose-100 text-center">
      <h1 class="text-4xl font-bold mb-4 text-gray-700">
        Welcome to Our Store!
      </h1>

      <h2 class="text-2xl font-bold mb-4 text-center text-gray-600">
        Check Out Sale Products
      </h2>

      <Vue3Marquee id="marquee-slider" :speed="12000">
        <div
          v-for="product in saleProducts"
          :key="product.id"
          class="border-2 rounded-xl border-solid border-pink-200 overflow-hidden ml-40"
        >
          <nuxt-link
            :to="`/shop/${product.id}`"
            class="h-full space-around gap-5 bg-white flex flex-col sm:p-2 xl:p-5"
          >
            <div class="shadow-sm rounded-md">
              <img
                :src="product.image"
                :alt="product.title"
                class="max-w-full object-contain rounded-md h-20 mx-auto"
              />
            </div>
            <div
              class="min-h-0 flex justify-between flex-col text-gray-900 h-20 w-44"
            >
              <span
                class="text-[9px] sm:text-[12px] lg:text-md font-semibold p-2 text-center text-gray-600"
              >
                {{ product.title }}
              </span>
              <span
                class="text-[9px] sm:text-[14px] text-center font-semibold text-gray-900"
              >
                {{ `$${product.price.toFixed(2)}` }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </Vue3Marquee>
    </div>

    <div class="px-4 py-8 bg-pink-100">
      <h2 class="text-2xl font-bold mb-4 text-center text-gray-600">
        Trending Products
      </h2>

      <Vue3Marquee
        id="marquee-slider-reverse"
        :speed="12000"
        :direction="'reverse'"
      >
        <div
          v-for="product in trendingProducts"
          :key="product.id"
          class="border-2 rounded-xl border-solid border-pink-200 overflow-hidden ml-40"
        >
          <nuxt-link
            :to="`/shop/${product.id}`"
            class="h-full space-around gap-5 bg-white flex flex-col sm:p-2 xl:p-5"
          >
            <div class="shadow-sm rounded-md">
              <img
                :src="product.image"
                :alt="product.title"
                class="max-w-full object-contain rounded-md h-20 mx-auto"
              />
            </div>
            <div
              class="min-h-0 flex justify-between flex-col text-gray-900 h-20 w-44"
            >
              <span
                class="text-[9px] sm:text-[12px] lg:text-md font-semibold p-2 text-center text-gray-600"
              >
                {{ product.title }}
              </span>
              <span
                class="text-[9px] sm:text-[14px] text-center font-semibold text-gray-900"
              >
                {{ `$${product.price.toFixed(2)}` }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </Vue3Marquee>
    </div>

    <div class="px-4 py-8 bg-violet-100">
      <h2 class="text-2xl font-bold mb-4 text-center text-gray-600">
        Most Selling Products
      </h2>
      <Vue3Marquee id="marquee-slider" :speed="12000">
        <div
          v-for="product in mostSellingProducts"
          :key="product.id"
          class="border-2 rounded-xl border-solid border-pink-200 overflow-hidden ml-40"
        >
          <nuxt-link
            :to="`/shop/${product.id}`"
            class="h-full space-around gap-5 bg-white flex flex-col sm:p-2 xl:p-5"
          >
            <div class="shadow-sm rounded-md">
              <img
                :src="product.image"
                :alt="product.title"
                class="max-w-full object-contain rounded-md h-20 mx-auto"
              />
            </div>
            <div
              class="min-h-0 flex justify-between flex-col text-gray-900 h-20 w-44"
            >
              <span
                class="text-[9px] sm:text-[12px] lg:text-md font-semibold p-2 text-center text-gray-600"
              >
                {{ product.title }}
              </span>
              <span
                class="text-[9px] sm:text-[14px] text-center font-semibold text-gray-900"
              >
                {{ `$${product.price.toFixed(2)}` }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </Vue3Marquee>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const saleProducts = ref([]);
const trendingProducts = ref([]);
const mostSellingProducts = ref([]);
const productsResponse = await useFetch("/api/prisma/get-all-products");
const products = productsResponse?.data?.value;
saleProducts.value = products.filter((product) =>
  [27, 28, 29].includes(product.id)
);
trendingProducts.value = products.filter((product) =>
  [30, 32, 33].includes(product.id)
);
mostSellingProducts.value = products.filter((product) =>
  [34, 35, 27].includes(product.id)
);
</script>
