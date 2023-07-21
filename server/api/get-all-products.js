export default defineEventHandler(async (event) => {
  let products = await $fetch("https://fakestoreapi.com/products");
  return products;
});
