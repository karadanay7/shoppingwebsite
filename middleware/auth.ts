export default defineNuxtRouteMiddleware((from, to) => {
  const user = useSupabaseUser();

  if (!user.value && to.fullPath == "/checkout") {
    return navigateTo("/auth");
  }
  if (
    user.value &&
    user.value.role !== "admin" &&
    to.fullPath.startsWith("/admin")
  ) {
    return navigateTo("/restricted"); // Redirect to the restricted page
  }
});
