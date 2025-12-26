export default defineEventHandler(async (event) => {
  const userId=event.context.params!.id;
  /* ! tells TypeScript that the value is not null or undefined */
    const data = await $fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  return data;
  /* note if return {data} then in template you would access it as users.value.data or users.data */
})