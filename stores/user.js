// stores/counter.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    cart: [],
    checkout: [],
  }),
  persist: true,
});
