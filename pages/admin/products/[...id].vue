<template>
  <MainLayout>
    <main>
      <div class="pt-32 mx-auto text-gray-700">
        <div class="flex justify-center">
          <div class="w-full sm:w-3/4 lg:w-1/2">
            <div class="bg-white shadow-md rounded p-6">
              <h2 class="text-2xl font-semibold text-center mb-4">
                Update {{ product.title }}
              </h2>
              <form @submit.prevent="onAddProduct">
                <!-- Category Dropdown -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" id="category"
                    >Category:</label
                  >
                  <select
                    v-model="categoryId"
                    required
                    id="category.id"
                    class="w-full px-4 py-2 border rounded"
                  >
                    <option
                      v-for="category in categories"
                      :value="category.id"
                      :key="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>

                <div class="mb-4">
                  <label class="block mb-2 font-bold" for="title">Title:</label>
                  <input
                    type="text"
                    v-model="title"
                    required
                    id="title"
                    class="w-full px-4 py-2 border rounded"
                    :placeholder="product.title"
                  />
                </div>

                <!-- Price Input -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" for="price">Price:</label>
                  <input
                    type="text"
                    v-model="price"
                    required
                    id="price"
                    class="w-full px-4 py-2 border rounded"
                    :placeholder="product.price"
                  />
                </div>

                <!-- Stock Quantity Input -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" for="stockQuantity"
                    >Stock Quantity:</label
                  >
                  <input
                    type="text"
                    v-model="stockQuantity"
                    required
                    id="stockQuantity"
                    class="w-full px-4 py-2 border rounded"
                    placeholder="Enter stock quantity"
                  />
                </div>

                <!-- Description Textarea -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" for="description"
                    >Description:</label
                  >
                  <input
                    v-model="description"
                    required
                    id="description"
                    class="w-full px-4 py-2 border rounded"
                    placeholder="Provide details about the product"
                  />
                </div>

                <!-- Photo File -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" id="image">
                    To Update Image:</label
                  >
                  <input
                    type="file"
                    @change="uploadImage"
                    accept="image/*"
                    class="w-full"
                  />
                </div>

                <img
                  v-if="src"
                  :src="src"
                  alt="product image"
                  class="max-w-[100px] max-h-[100px]"
                />
                <label class="font-bold">Current image</label>
                <img :src="product.image" class="max-w-[200px] max-h-[200px]" />
                <!-- Button -->
                <hr />
                <div class="mb-4">
                  <button
                    class="bg-gray-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Update Product
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

const route = useRoute();
const productId = route.params.id;

const response = await useFetch(`/api/prisma/get-product-by-id/${productId}`);
const product = response?.data?.value;

import useSupabase from "~/composables/useSupabase";
const categoriesResponse = await useFetch("/api/prisma/get-all-categories");
const categories = categoriesResponse.data.value;
const { supabase } = useSupabase();

const router = useRouter();

const title = ref(product.title);
const price = ref(product.price);
const stockQuantity = ref(product.stockQuantity);
const description = ref(product.description);
const categoryId = ref(product.categoryId);
const src = ref("");
const files = ref(null);
const latestPath = ref("");

const uploadImage = async (evt) => {
  files.value = evt.target.files;
  try {
    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `images/${fileName}`;

    let { error: uploadError, data: response } = await supabase.storage
      .from("butik1")
      .upload(filePath, file);
    latestPath.value = response.path.toString();

    if (uploadError) throw uploadError;
    const { data, error } = await supabase.storage
      .from("butik1")
      .download(filePath);
    if (error) throw error;
    src.value = URL.createObjectURL(data);
  } catch (error) {
    alert(error.message);
  }
};

const onAddProduct = async () => {
  await useFetch("/api/prisma/add-product/", {
    method: "POST",
    body: {
      title: title.value,
      categoryId: categoryId.value,
      price: parseInt(price.value),
      image: `https://wbhiziclmnbfhgnmgxzd.supabase.co/storage/v1/object/public/butik1/${latestPath.value}`,
      stockQuantity: parseInt(stockQuantity.value),
      description: description.value,
    },
  });
  router.push("/admin/products");
};
</script>
