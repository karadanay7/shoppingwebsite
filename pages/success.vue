<template>
  <MainLayout>
    <div
      id="SuccessPage"
      class="pt-32 min-h-screen mx-auto px-2 text-gray-800 bg-gray-50"
    >
      <div class="text-xl text-center">
        <Icon name="ooui:success" color="#84cc16" size="35" class="mb-1" />
        <span class="pl-2">Payment Successful</span>
        <p>Thank you! We've received your payment.</p>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 300);
});
</script>
