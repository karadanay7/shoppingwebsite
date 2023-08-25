<template>
  <footer
    class="bg-gray-50 w-full rounded-lg shadow dark:bg-gray-900 flex-shrink"
  >
    <div class="max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <nuxt-link to="/" class="flex items-center mb-4 sm:mb-0">
          <img src="/AK1.png" class="h-8 mr-3" alt="Flowbite Logo" />
        </nuxt-link>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-orange-500 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <nuxt-link to="/" class="hover:underline">Aysegul Karadan</nuxt-link>.
        All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
