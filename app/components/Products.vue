<script setup lang="ts">
// const Product=defineProps<{productName:string , 
//     productCategory :string,
//     productPrice :number,
//     stock : number,
//     status : string
// }>();
/* const Product = withDefaults(defineProps<{
  productName?: string,
  productCategory?: string,
  productPrice?: number,
  stock?: number,
  status?: string,
  productImage?:string,
  id:number
}>(), {
  productName: "Jacket",
  productCategory: "Clothing",
  productPrice: 1000,
  stock: 99,
  status: "In Stock",
  productImage:"~/assets/banner.jpg"
}); */
const Product = defineProps<{
  id: number
  productName?: string
  productCategory?: string
  productPrice?: number
  stock?: number
  status?: string
  productImage?: string
}>()

const viewProductDetails=(id:number)=>{

  navigateTo(`/product/${id}`)
  
}
</script>
<template>
    <div class="w-2xs h-120 border-red-500 border-2 rounded-lg shadow-lg bg-white m-auto mt-2">
        <div class="p-2">
            <img :src="Product.productImage" alt="Image" class="  w-full h-60 object-cover rounded-lg mb-4"/>
             <!-- using NuxtImg -->
              <!-- <NuxtImg :src="productImage" width="300" height="240"/> -->
           <p>Name : {{Product.productName}}</p> 
           <p>Category: {{ Product.productCategory}}</p>
           <p>price : $ {{Product.productPrice }}</p>
           <p>Stock : {{ Product.stock  }}</p>
           <p>Status: {{ Product.status }}</p>
        </div>
  <div class="flex justify-center">
      <button @click='viewProductDetails(Product.id)'
      class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded cursor-pointer"
    >
      View Details
    </button>
    
    </div>
    </div>
</template>