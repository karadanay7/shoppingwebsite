<template>
  <MainLayout>
    <main>
      <div class="pt-36 mx-auto text-gray-700 min-h-screen">
        <div class="flex justify-center">
          <div class="w-full sm:w-3/4 lg:w-1/2">
            <div class="bg-white shadow-md rounded p-6">
              <h1 class="block mb-2 font-bold text-xl text-center">
                Add a new Category
              </h1>
              <label class="block mb-2 font-bold"
                >List of Existing Categories:</label
              >

              <!-- Custom Dropdown-like UI for Existing Categories -->
              <div class="relative pb-4">
                <!-- Dropdown Button -->
                <div
                  id="customDropdown"
                  class="w-full px-4 py-2 border rounded cursor-pointer"
                  @click="toggleDropdown"
                >
                  Click to list existing categories
                  <Icon name="mingcute:down-fill" />
                </div>

                <!-- Dropdown menu -->
                <div
                  id="customDropdownMenu"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute top-10 left-0 dark:bg-gray-700"
                >
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li v-for="category in categories" :key="category.id">
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >{{ category.name }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <form @submit.prevent="onAddCategory">
                <!-- Category Dropdown -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" id="category"
                    >Add New Category:</label
                  >
                  <input
                    type="text"
                    class="w-full px-4 py-2 border rounded border-gray-400 focus:outline-orange-500"
                    style="width: 100%"
                    v-model="name"
                    placeholder="Category input must be more than 3 characters"
                  />
                </div>

                <!-- Button -->
                <hr />
                <div class="mb-4">
                  <button
                    :disabled="name.length < 3"
                    class="bg-orange-500 text-white hover:scale-110 font-bold py-2 px-4 rounded"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const categoriesResponse = await useFetch("/api/prisma/get-all-categories");

const categories = categoriesResponse.data.value;
const toggleDropdown = () => {
  const dropdownMenu = document.getElementById("customDropdownMenu");
  dropdownMenu.classList.toggle("hidden");
};
const name = ref("");
const onAddCategory = async () => {
  await useFetch("/api/prisma/add-category/", {
    method: "POST",
    body: {
      name: name.value,
    },
  });

  alert("Category  added successfully");
};
</script>
