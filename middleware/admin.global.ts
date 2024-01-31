export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  const isTryingToAccessAdminPage = to.fullPath.indexOf("/admin") === 0;

  // if (
  //   isTryingToAccessAdminPage &&
  //   (!user.value || user.value.email !== "karadan.ay7@gmail.com")
  // ) {
  //   // If a non-admin user is trying to access an admin page, redirect to the restricted page
  //   return navigateTo("/restricted");
  // }

  // // Allow navigation to proceed without redirection
  // return true;
});
