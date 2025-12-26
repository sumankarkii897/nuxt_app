export default defineEventHandler(async(event)=>{
    const products=await $fetch('https://dummyjson.com/products')
    return products;
})