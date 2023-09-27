<template>
  <MainLayout>
    <div class="min-h-screen bg-gray-50 pt-32">
      <div class="flex flex-col overflow-x-auto">
        <div>
          <div class="inline-block min-w-full">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead
                  class="border-b bg-orange-500 font-medium text-white overflow-hidden"
                >
                  <tr>
                    <th scope="col" class="px-6 py-4">Product ID</th>
                    <th scope="col" class="px-6 py-4">Title</th>
                    <th scope="col" class="px-6 py-4">Description</th>
                    <th scope="col" class="px-6 py-4">Stock Quantity</th>
                    <th scope="col" class="px-6 py-4">Price</th>
                    <th scope="col" class="px-6 py-4">Image</th>
                    <th scope="col" class="px-6 py-4">Edit or Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                      {{ product.id }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ product.title }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ product.description }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ product.stockQuantity }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ product.price }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <img
                        preload
                        :src="product.image"
                        :alt="product.title"
                        class="h-[70px] w-[70px] object-contain rounded-md"
                        sizes="100vw "
                      />
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      <NuxtLink
                        :to="`/admin/products/${product.id}`"
                        class="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mr-2 inline-block"
                      >
                        <Icon name="clarity:edit-solid" class="h-5 w-5"
                      /></NuxtLink>

                      <button
                        class="bg-orange-500 text-white font-bold py-2 px-4 rounded-full"
                      >
                        <Icon name="fluent:delete-12-regular" class="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const productsResponse = await useFetch("/api/prisma/get-all-products");
const products = productsResponse?.data?.value;

const deleteProduct = async (productId) => {
  if (confirm("Are you sure you want to delete this product?")) {
    const response = await useFetch(
      `/api/prisma/delete-product-by-id/${productId}`,
      {
        method: "DELETE",
      }
    );

    if (response?.statusCode === 200) {
      // If the product was successfully deleted, remove it from the list
      products.value = products.value.filter(
        (product) => product.id !== productId
      );
    } else {
      // Handle error, e.g., show an error message
      alert("Failed to delete the product.");
    }
  }
};

// Function to delete a product
</script>
