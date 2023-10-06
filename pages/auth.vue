<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white">
    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Login / Register</div>

      <button
        @click="login('google')"
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
        id="google"
        aria-label="google"
        type="button"
      >
        <img
          class="w-full max-w-[30px]"
          src="/google-logo.png"
          alt="googlelogo"
          title="google-logo"
          :sizes="{
            sm: '100vw',
            md: '50vw',
            lg: '400px',
          }"
        />
        <span>Google</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    return navigateTo("/");
  }
});

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
};
</script>
