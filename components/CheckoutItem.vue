<template>
  <div class="flex justify-start my-2 text-gray-800">
    <nuxt-img
      class="rounded-md md:w-[220px] w-[150px]"
      :src="product.image"
      alt="product"
      title="product"
    />
    <div class="overflow-hidden pl-2">
      <div class="truncate pl-2 font-semibold">{{ product.title }}</div>
      <div class="truncate pl-2">{{ product.description }}</div>
      <div class="text-lg font-semibold mt-2">
        $ <span class="font-bold">{{ product.price / 100 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const { product } = toRefs(props);
</script>
