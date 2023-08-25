<template>
  <MainLayout>
    <div class="bg-orange-400 text-center">
      <h1 class="text-4xl font-bold text-gray-50 pt-28">
        Welcome to Our Store!
      </h1>
      <div>
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-600">
          Check Out Sale Products
        </h2>

        <Vue3Marquee id="marquee-slider" :speed="12000" :pause-on-hover="true">
          <div
            v-for="product in saleProducts"
            :key="product.id"
            class="border-2 rounded-xl border-solid border-pink-200 overflow-hidden ml-40"
          >
            <nuxt-link
              :to="`/shop/${product.id}`"
              class="h-full space-around gap-5 bg-white flex flex-col sm:p-2 xl:p-5"
            >
              <div
                class="border rounded-md p-4 shadow-md flex flex-col items-center w-[150px] sm:w-[220px] md:w-[250px] lg:w-[260px] xl:w-[270px]"
              >
                <div
                  class="h-[110px] sm:h-[250px] md:h-[250px] lg:h-[250px] xl:h-[300px] w-[120px] sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[250px] flex items-center justify-center"
                >
                  <img
                    :src="product.image"
                    :alt="product.title"
                    class="max-w-full max-h-full object-contain rounded-md"
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
              </div>
            </nuxt-link>
          </div>
        </Vue3Marquee>
      </div>

      <div class="px-4 py-8">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-600">
          Trending Products
        </h2>

        <Vue3Marquee
          id="marquee-slider"
          :speed="12000"
          :direction="'reverse'"
          :pause-on-hover="true"
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
              <div
                class="border rounded-md p-4 shadow-md flex flex-col items-center w-[150px] sm:w-[220px] md:w-[250px] lg:w-[260px] xl:w-[270px]"
              >
                <div
                  class="h-[110px] sm:h-[250px] md:h-[250px] lg:h-[250px] xl:h-[300px] w-[120px] sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[250px] flex items-center justify-center"
                >
                  <img
                    :src="product.image"
                    :alt="product.title"
                    class="max-w-full max-h-full object-contain rounded-md"
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
              </div>
            </nuxt-link>
          </div>
        </Vue3Marquee>
      </div>

      <div class="px-4 py-8">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-600">
          Most Selling Products
        </h2>
        <Vue3Marquee id="marquee-slider" :speed="12000" :pause-on-hover="true">
          <div
            v-for="product in mostSellingProducts"
            :key="product.id"
            class="border-2 rounded-xl border-solid border-pink-200 overflow-hidden ml-40"
          >
            <nuxt-link
              :to="`/shop/${product.id}`"
              class="h-full space-around gap-5 bg-white flex flex-col sm:p-2 xl:p-5"
            >
              <div
                class="border rounded-md p-4 shadow-md flex flex-col items-center w-[150px] sm:w-[220px] md:w-[250px] lg:w-[260px] xl:w-[270px]"
              >
                <div
                  class="h-[110px] sm:h-[250px] md:h-[250px] lg:h-[250px] xl:h-[300px] w-[120px] sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[250px] flex items-center justify-center"
                >
                  <img
                    :src="product.image"
                    :alt="product.title"
                    class="max-w-full max-h-full object-contain rounded-md"
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
              </div>
            </nuxt-link>
          </div>
        </Vue3Marquee>
      </div>
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
