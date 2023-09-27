export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  const isTryingToAccessAdminPage = to.fullPath.indexOf("/admin") === 0;

  if (
    isTryingToAccessAdminPage &&
    (!user.value || user.value.role !== "admin")
  ) {
    // If a non-admin user is trying to access an admin page, redirect to the restricted page
    return "/restricted";
  }

  if (!user.value && to.fullPath === "/checkout") {
    // If there is no user and the user is trying to access the checkout page, redirect to the auth page
    return "/auth";
  }

  // Allow navigation to proceed without redirection
  return true;
});
