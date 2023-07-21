<template>
  <MainLayout>
    <Vue3Marquee id="marquee-slider" :speed="15000">
      <h1 class="font-bold pr-28">SALE !</h1>
      <h1 class="font-bold pr-28">15% OFF !</h1>
      <h1 class="font-bold pr-28">SALE !</h1>
      <h1 class="font-bold pr-28">15% OFF !</h1>
      <h1 class="font-bold pr-28">SALE !</h1>
      <h1 class="font-bold pr-28">15% OFF !</h1>
      <h1 class="font-bold pr-28">SALE !</h1>
      <h1 class="font-bold pr-28">15% OFF !</h1>
    </Vue3Marquee>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="flex justify-center"
        >
          <!-- Product Card -->
          <div
            class="border rounded-md p-4 shadow-md flex flex-col items-center h-full"
          >
            <img
              :src="product.image"
              :alt="product.title"
              :class="{
                'w-full flex-grow object-cover rounded-md mb-4':
                  screenWidth >= 652,
                'w-full h-48 object-cover rounded-md mb-4': screenWidth < 652,
              }"
            />
            <h3 class="text-lg font-semibold text-center">
              {{ product.title }}
            </h3>
            <p class="text-gray-600 mt-2">
              {{ `$${product.price.toFixed(2)}` }}
            </p>
            <!-- Add more product information here if available -->
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
const response = await useFetch("/api/get-all-products");

const products = response.data?.value;
</script>
<style scoped>
@keyframes scroll {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(-1760px);
  }
}
.grid-animation {
  animation: scroll 10s linear infinite;
}
@media (max-width: 652px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.horizontal-grid {
  overflow-x: hidden;
  overflow-y: auto;
  height: 500px;
}
.horizontal-grid-1,
.horizontal-grid-2 {
  display: flex;
}

.horizontal-grid-1 {
  margin-left: 160px;
}
.elements {
  border: 1px solid #e2e2e2;
  border-radius: 16px;
  padding: 16px;
  margin: 32px 0 0 32px;
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
