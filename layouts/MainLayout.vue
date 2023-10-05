<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="TopMenu" class="w-full border-b">
      <ul
        class="text-sm md:text-lg flex flex-row borderrounded-lg bg-gray-50 md:border-0 justify-end"
      >
        <li>
          <nuxt-link
            to="/"
            class="block py-2 text-gray-600 pl-2 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Home</nuxt-link
          >
        </li>

        <li>
          <nuxt-link
            to="/shop"
            class="block py-2 text-gray-600 pl-3 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Shop</nuxt-link
          >
        </li>

        <li>
          <nuxt-link
            to="/about"
            class="block py-2 text-gray-600 pl-3 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            >About</nuxt-link
          >
        </li>

        <li>
          <nuxt-link
            to="/contact"
            class="block py-2 text-gray-600 pl-3 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Contact</nuxt-link
          >
        </li>

        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="block py-2 pl-3 pr-2 md:pr-8 text-gray-600 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
          :class="
            isAccountMenu
              ? 'bg-gray-50 border z-40 '
              : 'border border-[#f9fafb]'
          "
        >
          <Icon name="ic:baseline-person" size="17" class="mb-1" />
          <span class="hidden md:inline-block">Account</span>
          <Icon name="mdi:chevron-down" size="17" class="ml-2 mb-1" />

          <div
            id="AccountMenu"
            v-if="isAccountMenu"
            class="absolute bg-white w-[150px] md:w-[220px] text-gray-600 z-60 top-[38px] -left-[100px] border-x border-b"
          >
            <div v-if="!user">
              <div class="text-semibold text-[15px] my-4 px-3">Welcome !</div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/auth"
                  class="bg-orange-500 text-center w-full text-[14px] md:text-[16px] rounded-sm text-white font-semibold p-2"
                >
                  Login / Register
                </NuxtLink>
              </div>
            </div>
            <div class="border-b" />
            <div v-if="user && user.email !== 'karadan.ay7@gmail.com'">
              <ul class="bg-gray-50">
                <li>
                  <NuxtLink
                    to="/orders"
                    class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500 inline-block"
                  >
                    <Icon name="bx:bxs-shopping-bags" size="17" class="mb-1" />
                    My Orders
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/profile"
                    class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500 inline-block"
                  >
                    <Icon name="ic:baseline-person" size="17" class="mb-1" />
                    My Profile
                  </NuxtLink>
                </li>
                <li
                  @click="signOut()"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500"
                >
                  <Icon name="uil:signout" size="17" class="mb-1" />
                  Sign out
                </li>
              </ul>
            </div>
            <div v-if="user && user.email === 'karadan.ay7@gmail.com'">
              <ul class="bg-gray-50">
                <li>
                  <NuxtLink
                    to="/admin/products"
                    class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500 inline-block"
                  >
                    <Icon name="dashicons:products" size="17" class="mb-1" />
                    Products
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/admin/orders"
                    class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500 inline-block"
                  >
                    <Icon
                      name="material-symbols:draft-orders"
                      size="17"
                      class="mb-1"
                    />
                    Orders
                  </NuxtLink>
                </li>
                <li
                  @click="signOut()"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500"
                >
                  <Icon name="uil:signout" size="17" class="mb-1" />
                  Sign out
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div id="MainHeader" class="flex w-full bg-gray-50 justify-center">
      <div class="flex justify-center gap-10 max-w-[1150px] p-4 w-full mx-auto">
        <NuxtLink to="/" class="max-w-[100px]">
          <nuxt-img
            src="/AK1.png"
            alt="aliexpresslogo"
            title="aliexpress"
            sizes="sm:100vw md:50vw lg:400px"
          />
        </NuxtLink>

        <div class="max-w-[700px] w-full">
          <div class="relative">
            <div
              class="flex items-center border-2 border-orange-500 rounded-md w-full"
            >
              <input
                class="w-full placeholder-gray-400 text-sm pl-2 focus:outline-none"
                placeholder=" Search for product, category or brand "
                type="text"
                v-model="searchItem"
              />
              <Icon
                v-if="isSearching"
                name="eos-icons:loading"
                size="25"
                class="mr-2"
              />
              <button
                type="button"
                class="flex items-center h-[100%] p-1.5 px-2 bg-orange-500"
                id="serach"
                aria-label="search"
              >
                <Icon name="ph:magnifying-glass" size="20" color="#ffffff" />
              </button>
            </div>

            <div class="absolute bg-white max-w-[700px] h-auto w-full">
              <div
                v-if="items && items.data"
                v-for="item in items.data"
                class="p-1"
              >
                <NuxtLink
                  :to="`/shop/${item.id}`"
                  class="flex items-center justify-center w-full cursor-pointer hover:bg-gray-100"
                >
                  <div class="flex items-center">
                    <nuxt-img
                      class="rounded-md"
                      width="40"
                      :src="item.image"
                      alt="itemlogo"
                      title="item"
                    />
                    <div class="truncate ml-2">{{ item.title }}</div>
                  </div>
                  <div class="truncate">${{ item.price / 100 }}</div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink to="/shoppingcart" class="flex items-center w-[100px]">
          <button
            type="button"
            class="relative"
            @mouseenter="isCartHover = true"
            @mouseleave="isCartHover = false"
            id="cart"
            aria-label="cart"
          >
            <span
              class="absolute flex items-center justify-center -right-[3px] top-0 bg-orange-500 h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
            >
              {{ userStore.cart.length }}
            </span>
            <div class="min-w-[40px]">
              <Icon
                name="ph:shopping-cart-simple-light"
                size="33"
                :color="isCartHover ? '#f97316' : ''"
              />
            </div>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>

  <slot />

  <Footer />
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const supabase = useSupabaseClient();
const user = useSupabaseUser();

let isAccountMenu = ref(false);
let isCartHover = ref(false);
let isSearching = ref(false);
let searchItem = ref("");
let items = ref(null);

const signOut = () => {
  supabase.auth.signOut();
  user.value = null;

  return navigateTo("/");
};

const searchByName = useDebounce(async () => {
  isSearching.value = true;
  items.value = await useFetch(
    `/api/prisma/search-by-name/${searchItem.value}`
  );
  isSearching.value = false;
}, 100);

watch(
  () => searchItem.value,
  async () => {
    if (!searchItem.value) {
      setTimeout(() => {
        items.value = "";
        isSearching.value = false;
        return;
      }, 500);
    }
    searchByName();
  }
);
</script>
