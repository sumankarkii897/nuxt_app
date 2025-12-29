<script setup>
const router=useRoute();
const id=router.params.id;
const {data:product,pending,error}=await useFetch(`/api/products/${id}`)
// console.log(product.value);
useHead({
  title:`${product.value.title}`,
  meta:[{
    name:"description",content:`${product.value.description}`
  },
{ property:"og:title", content:`${product.value.title}`},
{property : "og:description" , content:`${product.value.description}`},
{property:"og:type",content:"product"}
]
})
</script>

<template>
   <div class="w-full  bg-amber-100  px-4 py-4">
     <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6"> Product Description</h1>
    <div>
        <div v-if="pending" > Loading ....</div>
        <div v-else-if="error"> Error : {{ error }}</div>
        <div v-else class="flex flex-col lg:flex-row justify-center items-center">
          <div class="flex justify-center lg:w-1/3 mb-1 lg:mb-0">
              <img :src="product.thumbnail" :alt="product.title" class="h-80 w-80 ">
          </div>
         <div class="lg:w-2/3 space-y-4 text-gray-700">
          <p class="text-xl font-semibold"> {{ product.title }}</p>   
         <p class="text-base"> {{ product.description }}</p>
           <div class="space-y-2 ">
          <p><strong>Category:</strong> {{ product.category }}</p>
          <p><strong>Price:</strong> ${{ product.price }}</p>
          <p><strong>Rating:</strong> {{ product.rating }}</p>
          <p><strong>Stock:</strong> {{ product.stock }} available</p>
          <p><strong>Brand:</strong> {{ product.brand }}</p>
          <p><strong>Warranty Information:</strong> {{ product.warrantyInformation }}</p>
          <p><strong>Shipping Information:</strong> {{ product.shippingInformation }}</p>
          <p><strong>Availability Status:</strong> {{ product.availabilityStatus }}</p>
        </div>
       
         </div>
        </div>
    </div>
   </div>
</template>