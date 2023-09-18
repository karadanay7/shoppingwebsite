<template>
  <div>
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
            to="/help"
            class="block py-2 text-gray-600 pl-3 md:pl-12 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Help</nuxt-link
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
            isAccountMenu ? 'bg-white border z-40 ' : 'border border-[#f9fafb]'
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
            <ul class="bg-gray-50">
              <li v-if="user">
                <NuxtLink
                  to="/orders"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500 inline-block"
                >
                  <Icon name="bx:bxs-shopping-bags" size="17" class="mb-1" />
                  My Orders
                </NuxtLink>
              </li>
              <li v-if="user">
                <NuxtLink
                  to="/profile"
                  class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500 inline-block"
                >
                  <Icon name="ic:baseline-person" size="17" class="mb-1" />
                  My Profile
                </NuxtLink>
              </li>
              <li
                v-if="user"
                @click="signOut()"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-orange-500"
              >
                <Icon name="uil:signout" size="17" class="mb-1" />
                Sign out
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <slot />
    <Footer class="w-full" />
  </div>
</template>
<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const client = useSupabaseClient();
const user = useSupabaseUser();

let isAccountMenu = ref(false);
let isCartHover = ref(false);
let isSearching = ref(false);
let searchItem = ref("");
let items = ref(null);
</script>
