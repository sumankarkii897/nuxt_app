<script setup>
    import bannerImg from "~/assets/banner.jpg";
  const products=[{
    status:"Limited Stock",
    name:"Men Clothing",
    price:49.99     
  },
  {
    status:"New Arrival",
    name:"Women's Dress",
    price:79.99     
  },
  {
    status:"Best Seller",
    name:"Kids Shoes",
    price:39.99     
  },
  {
    status:"Hot Item",
    name:"Home Decor",
    price:59.99     
  } ,
  {
    status:"Limited Stock",
    name:"Men Clothing",
    price:49.99
  }
];  
</script>
<!-- <NuxtLink to="/blog/1"></NuxtLink> only used in the template inside script use useRouter and router.push(`/blog/${num.value}`  ) -->
<template>
    <div>
       <section>
            <div :style="{backgroundImage: `url(${bannerImg})`}" class="h-150 bg-cover bg-center flex items-center justify-center mb-6 rounded-lg shadow-lg border-amber-400 relative" >
                <!-- <h2 class="text-3xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">Explore Our Latest Articles</h2> -->
                <div class="absolute right-6 bottom-20">
                    <p class="text-[#E59B4C] text-3xl font-bold italic ">Style Up Your Life!</p>
<button class="bg-[#E59B4C] px-1 py-3 rounded-2xl font-sans w-24">Shop Now</button>
                </div>
            </div>
            </section>
            <section>
                <div class="w-500px h-16 bg-white flex justify-evenly gap-1.5 items-center rounded-lg shadow-lg border-amber-400 mx-auto font-extrabold  text-center  p-6">
<p class="text-[#dc8b29]">EARLY ADOPTER LAUNCH PROMO !</p>
<p class="60px text-[#a78bfa]">50% OFF*</p>
<p class="text-[#dc8b29]">FASHION BEAUTY KIDS SUMMER HOME & MORE</p>
                </div>
            </section>
            <section>
               <div class="w-500px h-auto bg-white  rounded-lg shadow-lg border-amber-400 mx-auto mt-6 mb-6">
                 <div class="text-3xl font-bold mt-6 mb-4 text-center w-5xl mx-auto h-1/5 ">
                    <h2 class=" text-[#E59B4C]">Hot Deals 🔥</h2>
                </div>
                <div class="grid lg:grid-cols-4 justify-start gap-4 w-7xl mb-6 grid-cols-3 sm:grid-cols-1 lg:ml-2 mx-auto">
                    <ProductCard v-for="product in products" :key="product.name" :status="product.status" :name="product.name" :price="product.price"/>
                    
                    
                </div>
               </div>
            </section>
    </div>
</template>
<style scoped>
   
    
    </style>