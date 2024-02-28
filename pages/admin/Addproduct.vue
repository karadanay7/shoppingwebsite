<template>
  <MainLayout>
    <main>
      <Loading v-if="isLoading" />
      <div class="pt-32 mx-auto text-gray-700 bg-gray-50">
        <div class="flex justify-center">
          <div class="w-full sm:w-3/4 lg:w-1/2">
            <div class="bg-white shadow-md rounded p-6">
              <h2 class="text-2xl font-semibold text-center mb-4">
                Add a new Product
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
                    class="w-full px-4 py-2 border rounded border-gray-400 focus:outline-orange-500"
                  >
                    <option
                      v-for="category in categories"
                      :value="category.id"
                      :key="category.id"
                      class="ring-orange-500 hover:ring-orange-500"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>
                <NuxtLink
                  to="/admin/Addcategory"
                  class="mb-4 flex justify-center"
                >
                  <button
                    class="bg-orange-500 text-white hover:scale-110 font-bold py-2 px-4 rounded"
                  >
                    Add a new category
                  </button></NuxtLink
                >

                <div class="mb-4">
                  <label class="block mb-2 font-bold" for="title">Title:</label>
                  <input
                    type="text"
                    v-model="title"
                    required
                    id="title"
                    class="w-full px-4 py-2 border rounded border-gray-400 focus:outline-orange-500"
                    placeholder="Enter product title"
                  />
                </div>

                <!-- Price Input -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" for="price">Price:</label>
                  <input
                    type="number"
                    v-model="price"
                    required
                    id="price"
                    class="w-full px-4 py-2 border rounded border-gray-400 focus:outline-orange-500"
                    placeholder="Enter product price and add double 0"
                  />
                </div>

                <!-- Stock Quantity Input -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" for="stockQuantity"
                    >Stock Quantity:</label
                  >
                  <input
                    type="number"
                    v-model="stockQuantity"
                    required
                    id="stockQuantity"
                    class="w-full px-4 py-2 border rounded border-gray-400 focus:outline-orange-500"
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
                    class="w-full px-4 py-2 border rounded border-gray-400 focus:outline-orange-500"
                    placeholder="Provide details about the product"
                  />
                </div>

                <!-- Photo File -->
                <div class="mb-4">
                  <label class="block mb-2 font-bold" id="image">Image:</label>
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
                  alt="Avatar"
                  class="avatar image"
                  style="width: 10em; height: 10em"
                />
                <!-- Button -->

                <div class="mb-4 flex justify-center">
                  <button
                    class="bg-orange-500 hover:scale-110 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Product
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

<style></style>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const categoriesResponse = await useFetch("/api/prisma/get-all-categories");
const categories = categoriesResponse.data.value;
const supabase = useSupabaseClient();

const router = useRouter();

const title = ref("");
const price = ref(1);
const stockQuantity = ref(1);
const description = ref("");
const categoryId = ref(null);
const src = ref("");
const files = ref(null);
const latestPath = ref("");
const isLoading = ref(false);

const uploadImage = async (evt) => {
  files.value = evt.target.files;
  try {
    isLoading.value = true;
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

    latestPath.value = response?.path.toString();
    if (uploadError) throw uploadError;
    const { data, error } = await supabase.storage
      .from("butik1")
      .download(filePath);
    if (error) throw error;
    src.value = URL.createObjectURL(data);
    isLoading.value = false;
  } catch (error) {
    alert(error.message);
  }
};

const onAddProduct = async () => {
  isLoading.value = true;
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
// Fetch and display the image when the page loads or when the path changes
</script>
const categories = [ 1, Clothing , 2, Electronics , 3, Home and Furniture , 4,
Books and Stationery , 5, Sports and Outdoors , 6, Coffee Shops , 7, Restaurants
, 8, Spa & Massage , 9, Beauty , 10, Grocery Stores , 11, Toys and Games , 12,
Jewelry and Accessories , 13, Automotive , 14, Pet Supplies , 15, Tech and
Gadgets , 16, Health and Fitness , 17, Music and Instruments , 18, Arts and
Crafts , 19, Baby and Kids , 20, Footwear , ];
