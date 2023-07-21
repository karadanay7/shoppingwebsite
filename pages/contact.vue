<template>
  <div class="bg-stone-100 min-h-screen">
    <!-- Grayish section with "Get in Touch" -->
    <div
      class="bg-stone-100 py-10 relative text-gray-600 mx-auto py-8 px-4 sm:px-6 lg:px-8"
    >
      <h1
        class="font-extrabold text-gray-600 text-2xl sm:text-4xl md:text-6xl mb-4 ml-2 mx-auto"
      >
        Contact Us
      </h1>

      <!-- Image covering half of the right side with circular cut -->
      <img
        src="/contact.jpg"
        alt="Cut Image"
        class="absolute top-0 right-0 h-full w-1/2 object-cover rounded-bl-full lg:w-2/5 xl:w-1/3"
      />
      <div class="mx-auto max-w-md">
        <div class="inline-block">
          <!-- Cut effect -->
        </div>
      </div>
    </div>
    <!-- Contact information white box -->
    <div class="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 class="font-bold mb-4 text-gray-600 text-2xl sm:text-4xl md:text-4xl">
        Contact Information
      </h2>
      <div class="text-lg text-gray-900 mb-4 ml-2">
        <p>
          Have questions or feedback? We'd love to hear from you! Reach out to
          us using the contact details below:
        </p>
        <ul class="list-disc list-inside">
          <li>Email: contact@yourboutique.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Fashion Street, City, Country</li>
        </ul>
      </div>
      <div class="mt-4 ml-2">
        <a
          href="mailto:contact@yourboutique.com"
          class="btn btn-primary py-2 px-4 self-start w-40 mx-auto"
        >
          <span class="mr-2">
            <Icon name="heroicons-outline:mail" class="h-5 w-5" />
          </span>
          Send us a Message
        </a>
      </div>
    </div>
    <!-- Form white box -->
    <div class="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl sm:text-4xl md:text-4xl font-bold mb-4 text-gray-600">
        Send us a Message
      </h2>
      <form class="flex flex-col text-gray-600">
        <label class="mb-2 font-medium ml-2" for="name"> Name </label>
        <input
          type="text"
          id="name"
          class="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:ring focus:ring-gray-300 focus:outline-none ml-2"
          placeholder="Your Name"
        />
        <label class="mb-2 font-medium ml-2" for="email"> Email </label>
        <input
          type="email"
          id="email"
          class="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:ring focus:ring-gray-300 focus:outline-none ml-2"
          placeholder="Your Email"
        />
        <label class="mb-2 font-medium ml-2" for="message"> Message </label>
        <textarea
          id="message"
          rows="5"
          class="border border-gray-300 rounded-md px-3 py-2 mb-4 resize-none focus:ring focus:ring-gray-300 focus:outline-none ml-2"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          class="btn btn-primary px-4 self-start w-40 mx-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
