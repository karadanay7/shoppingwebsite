<template>
  <NavLayout>
    <div class="bg-gray-50 min-h-screen pt-28 text-gray-700">
      <div class="container mx-auto">
        <h1 class="text-3xl font-semibold mb-4">Help Center</h1>

        <!-- FAQ Section -->
        <section>
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- FAQ Item 1 -->
            <div class="bg-white p-4 rounded shadow-md">
              <h3 class="text-lg font-semibold mb-2">
                How do I reset my password?
              </h3>
              <p class="text-gray-700">
                To reset your password, go to the login page and click on the
                "Forgot Password" link. Follow the instructions sent to your
                email.
              </p>
            </div>

            <!-- FAQ Item 2 -->
            <div class="bg-white p-4 rounded shadow-md">
              <h3 class="text-lg font-semibold mb-2">
                How can I contact customer support?
              </h3>
              <p class="text-gray-700">
                You can contact our customer support team by sending an email to
                support@example.com or by calling our hotline at 123-456-7890.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact Us Section -->
        <section class="mt-8">
          <h2 class="text-2xl font-semibold mb-2">Contact Us</h2>
          <div class="bg-white p-4 rounded shadow-md">
            <p class="text-gray-700">
              If you have any other questions or need further assistance, please
              don't hesitate to contact us. We're here to help!
            </p>
            <button
              class="mt-4 bg-gray-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded"
            >
              <NuxtLink to="/contact"> Contact Support</NuxtLink>
            </button>
          </div>
        </section>
      </div>
    </div>
  </NavLayout>
</template>

<script setup>
import NavLayout from "~/layouts/NavLayout.vue";
</script>
