export default defineEventHandler(async (event)=>{
    const id=event.context.params!.id;
    const data=await $fetch(`https://dummyjson.com/products/${id}`)
   
    
    return data
})