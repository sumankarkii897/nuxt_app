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
   <div class="w-full h-160 bg-amber-200 m-1 p-2">
     <h1 class="text-center"> Product Description</h1>
    <div>
        <div v-if="pending" > Loading ....</div>
        <div v-else-if="error"> Error : {{ error }}</div>
        <div v-else>
          <div class="flex justify-center">
              <img :src="product.thumbnail" :alt="product.title" class="h-80 w-80 ">
          </div>
         <p>title : {{ product.title }}</p>   
         <p> description : {{ product.description }}</p>
         <p> category : {{ product.category }}</p>
         <p> price : {{ product.price }}</p>
         <p> Rating : {{ product.rating }}</p>
         <p> Stock : {{ product.stock }}</p>
         <p> Brand : {{ product.brand }}</p>
         <p>warrantyInformation : {{ product.warrantyInformation }}</p>
         <p> Shipping Information : {{ product.shippingInformation }}</p>
         <p>AvailabilityStatus : {{ product.availabilityStatus }}</p>
        </div>
    </div>
   </div>
</template>