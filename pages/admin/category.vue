<template>
  <MainLayout>
    <div class="pt-32 mx-auto text-gray-700">
      <div class="flex justify-center">
        <div class="w-full sm:w-3/4 lg:w-1/2"></div>
        <div class="bg-white shadow-md rounded p-6">
          <h2 class="text-2xl font-semibold text-center mb-4">
            Add a new category
          </h2>
          <h3>Existing Categories</h3>
          <form>
            <div class="a-spacing-top-medium">
              <label>Type</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="name"
              />
            </div>
            <hr />
            <!-- Button -->
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddCategory"
                    >Add category</span
                  >
                </span>
              </span>
            </div>
          </form>
          <br />
          <ul class="list-group">
            <li
              v-for="category in categories"
              :key="category._id"
              class="list-group-item"
            >
              {{ category.name }}
            </li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const categoriesResponse = await useFetch("/api/prisma/get-all-categories");

const categories = categoriesResponse.data.value;

const name = ref("");
const onAddCategory = async () => {
  await useFetch("/api/prisma/add-category/", {
    method: "POST",
    body: {
      name: name.value,
    },
  });

  console.log("Category added successfully");
};
</script>

<style lang="scss" scoped></style>
