<template>
  <div>
    <div id="TopMenu" class="w-full border-b md:block hidden">
      <ul
        class="font-medium flex flex-row border border-gray-100 rounded-lg bg-gray-50 space-x-8 md:border-0 justify-end"
      >
        <li>
          <nuxt-link
            to="/"
            class="block py-2 pl-3 pr-4 text-gray-600 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Home</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/shop"
            class="block py-2 pl-3 pr-4 text-gray-600 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Shop</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/about"
            class="block py-2 pl-3 pr-4 text-gray-600 hover:text-gray-900 hover:scale-110 rounded p-0"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/help"
            class="block py-2 pl-3 pr-4 text-gray-600 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Help</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="block py-2 pl-3 pr-4 text-gray-600 hover:text-gray-900 hover:scale-110 rounded p-0"
            aria-current="page"
            >Contact</nuxt-link
          >
        </li>

        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="block py-2 pl-3 pr-4 text-gray-600 hover:text-gray-900 hover:scale-110 rounded p-0"
          :class="
            isAccountMenu ? 'bg-white border z-40 ' : 'border border-[#FAFAFA]'
          "
        >
          <Icon name="ph:user-thin" size="17" class="mb-1" />
          Account
          <Icon name="mdi:chevron-down" size="17" class="ml-2 mb-1" />

          <div
            id="AccountMenu"
            v-if="isAccountMenu"
            class="absolute bg-white w-[220px] text-gray-600 z-40 top-[38px] -left-[100px] border-x border-b"
          >
            <div v-if="!user">
              <div class="text-semibold text-[15px] my-4 px-3">Welcome !</div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/auth"
                  class="bg-orange-500 text-center w-full text-[16px] rounded-sm text-white font-semibold p-2"
                >
                  Login / Register
                </NuxtLink>
              </div>
            </div>
            <div class="border-b" />
            <ul class="bg-gray-50">
              <li
                @click="navigateTo('/orders')"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-gray-900"
              >
                My Orders
              </li>
              <li
                v-if="user"
                @click="client.auth.signOut()"
                class="text-[13px] py-2 px-4 w-full hover:bg-gray-100 hover:text-gray-900"
              >
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
