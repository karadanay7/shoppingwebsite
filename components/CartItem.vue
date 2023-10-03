<template>
  <li
    @click="isSelected = !isSelected"
    class="flex justify-between group items-center my-2 bg-gray-50"
  >
    <div
      class="h-[20px] shrink-0 w-[20px] rounded-full border mr-5 ml-5 group-hover:border-gray-400 border-gray-300"
      :class="isSelected ? 'bg-orange-500' : null"
    >
      <div class="h-[8px] w-[8px] rounded-full" />
    </div>
    <section class="flex-wrap flex justify-start grow gap-4">
      <nuxt-img
        class="rounded-md w-[150px] h-20 object-contain shrink-0"
        :src="product.image"
        alt="producturl"
      />
      <section class="h-fit my-auto">
        <h4 class="truncate text-md">{{ product.title }}</h4>
        <p class="font-semibold text-lg">${{ product.price / 100 }}</p>
      </section>
    </section>
    <button
      type="button"
      @click="removeFromCart()"
      class="mx-3 sm:block hidden -mt-0.5 hover:text-orange-500 float-right"
      id="trash"
      aria-label="trash"
    >
      <Icon name="material-symbols:delete-outline" size="20" />
    </button>

    <button
      type="button"
      @click="removeFromCart()"
      class="sm:hidden -mt-0.5 hover:text-red-500"
      id="trash"
      aria-label="trash"
    >
      <Icon name="material-symbols:delete-outline" size="20" />
    </button>
  </li>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const props = defineProps(["product", "selectedArray"]);
const { product, selectedArray } = toRefs(props);

const emit = defineEmits(["selectedRadio"]);

let isHover = ref(false);
let isSelected = ref(false);

const removeFromCart = () => {
  userStore.cart.forEach((prod, index) => {
    if (prod.id === product.value.id) {
      userStore.cart.splice(index, 1);
    }
  });
};

watch(
  () => isSelected.value,
  (val) => {
    emit("selectedRadio", { id: product.value.id, val: val });
  }
);
</script>
