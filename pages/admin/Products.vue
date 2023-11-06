<template>
  <MainLayout>
    <div id="IndexPage" class="pt-36 md:mt-6 mx-auto px-2 bg-gray-50">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      >
        <div
          v-if="products"
          v-for="product in products"
          :key="product.id"
          class="flex justify-center"
        >
          <nuxt-link :to="`/shop/${product.id}`">
            <div
              class="border rounded-md p-4 shadow-md flex flex-col items-center w-[150px] sm:w-[220px] md:w-[250px] lg:w-[260px] xl:w-[270px]"
            >
              <div
                class="h-[110px] sm:h-[250px] md:h-[250px] lg:h-[250px] xl:h-[300px] w-[120px] sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[250px] flex items-center justify-center"
              >
                <img
                  preload
                  :src="product.image"
                  :alt="product.title"
                  class="max-w-full max-h-full object-contain rounded-md"
                  sizes="sm:100vw md:50vw lg:400px"
                />
              </div>
              <div
                class="mt-4 h-[100px] text-center flex flex-col justify-center"
              >
                <h3 class="text-xs sm:text-lg md:text-lg font-semibold">
                  {{ product.title }}
                </h3>
                <p class="text-gray-600 mt-2 text-xs sm:text-lg md:text-lg">
                  ${{ product.price }}.00
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const productsResponse = await useFetch("/api/prisma/get-all-products");
const products = productsResponse?.data?.value;
</script>
