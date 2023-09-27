<template>
  <MainLayout>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white p-8 rounded-lg shadow-md text-gray-700">
        <h1 class="text-2xl font-semibold mb-4">Access Restricted</h1>
        <p class="mb-4">You do not have permission to access this page.</p>
        <NuxtLink to="/">Go to Home</NuxtLink>
      </div>
    </div></MainLayout
  >
</template>
<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
</script>
