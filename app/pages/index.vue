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
useHead({
  title:"Home",
meta: [
    { name: "description", content: "Explore the latest fashion deals" },
    { name: "keywords", content: "fashion, clothing, hot deals, shopping,main page" }
    ,{
      property:"og:title",content:"Home"
    },
    {property:"og:description",content:"Explore the latest fashion deals"},
  {
    property:"og:type",content:"website"
  }
  ]
})
</script>
<!-- <NuxtLink to="/blog/1"></NuxtLink> only used in the template inside script use useRouter and router.push(`/blog/${num.value}`  ) -->
<template>
    <div>
       <section>
            <div :style="{backgroundImage: `url(${bannerImg})`}" class="h-96  bg-cover bg-center flex items-center justify-center rounded-lg shadow-lg border-amber-400 relative md:h-250" >
                <!-- <h2 class="text-3xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">Explore Our Latest Articles</h2> -->
                <div class="absolute right-2 bottom-10 md:right-6 md:bottom-20">
                    <p class="text-[#E59B4C]  font-bold italic md:text-2xl ">Style Up Your Life!</p>
<button class="bg-[#E59B4C] p-1 rounded-2xl font-sans w-22 md:px-1 md:py-3">Shop Now</button>
                </div>
            </div>
            </section>
            <section class="mt-4">
                <div class="w-500px h-16 bg-white flex justify-evenly gap-1.5 items-center rounded-lg shadow-lg border-amber-400 mx-auto font-extrabold  text-center  p-6">
<p class="text-[#dc8b29]">EARLY ADOPTER LAUNCH PROMO !</p>
<p class="60px text-[#a78bfa]">50% OFF*</p>
<p class="text-[#dc8b29]">FASHION BEAUTY KIDS SUMMER HOME & MORE</p>
                </div>
            </section>
<section class="mt-2 w-full bg-white rounded">
  <h2 class="text-center text-2xl font-bold">Hot Deals 🔥</h2>

  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto justify-items-center px-4 mt-4 ">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :status="product.status"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </div>
</section>


    </div>
</template>
<style scoped>
   
    
    </style>