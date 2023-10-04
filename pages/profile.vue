<template>
  <MainLayout>
    <div class="pt-32 mx-auto text-gray-700 min-h-screen">
      <div class="flex justify-center">
        <div class="w-full sm:w-3/4 lg:w-1/2">
          <div class="bg-white shadow-md rounded p-6">
            <h2 class="text-2xl font-semibold text-center mb-4">
              Update Profile
            </h2>

            <form @submit.prevent="updateProfile">
              <!-- Name Input -->
              <div class="mb-4">
                <label class="block mb-2 font-bold" for="name">Name:</label>
                <input
                  disabled
                  type="text"
                  v-model="name"
                  id="name"
                  class="w-full px-4 py-2 border rounded"
                  :placeholder="name"
                />
              </div>

              <!-- Email Input -->
              <div class="mb-4">
                <label class="block mb-2 font-bold" for="email">Email:</label>
                <input
                  type="email"
                  v-model="email"
                  id="email"
                  class="w-full px-4 py-2 border rounded"
                  :placeholder="user.email"
                />
              </div>

              <!-- Button -->
              <hr />
              <div class="mb-4">
                <button
                  class="bg-gray-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const name = ref(user.value.user_metadata.full_name);
const email = ref(user.value.email);

const updateProfile = await supabase.auth.updateUser({ email: email.value });
</script>
