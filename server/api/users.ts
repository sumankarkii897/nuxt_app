
export default defineEventHandler(async (event) => {
    const data = await $fetch("https://jsonplaceholder.typicode.com/users")
  return data;
  /* note if return {data} then in template you would access it as users.value.data or users.data */
})