<script setup lang="ts">
    const productDetails=defineProps<{status:string,name:string,price:number}>();
    </script>
<template>
<section>
    <div class="w-2xs h-96 border-red-500 border-2 rounded-lg shadow-lg bg-white flex flex-col  p-3 relative sm:ml-50 mb-2 ">
        <div class="absolute right-0 top-0 bg-[#E59B4C] p-1 h-9  rounded-bl-lg text-center font-italic">
            <p class="text-center">{{productDetails.status?productDetails.status:"Low Stock"}}</p>
        </div>
       
            <img src="~/assets/banner.jpg" alt="Image" class=" mt-8 w-full h-60 object-cover rounded-lg mb-4"/>
        
        <div class="absolute left-3.5 bottom-4">
            <h2>{{productDetails.name?productDetails.name:"Men Clothing"}}</h2>
            <p class="text-lg font-bold mt-2">${{productDetails.price?productDetails.price:0}}</p>
        </div>
    </div>
</section>
    </template>