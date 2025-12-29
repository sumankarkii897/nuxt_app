<script setup lang="ts">
    useHead({
        title:"About",
        meta:[
            {name:"description",content:"Know about us "},
            {property:"og:description",content:"Know about us"},
            {property:"og:title",content:"About"},
            {
            property:"og:type",content:"website"
            }
        
        ]
    })
</script>
<template>
    <!-- <div>
        <h1>Welcome to the about Page</h1>
    </div> -->
    <div >
      <div class="w-full bg-blue-300 text-white space-y-2 p-2">
        <h1 class="text-3xl font-semibold">About Us</h1>
        <p>Learn more about our company and what we do</p>
      </div>
      <div>
        <div class="text-center mt-2 p-3  lg:p-1 space-y-4">
        <h2 class="text-2xl font-bold">Who we Are</h2>
        <p class="mt-2">We are a passionate team dedicated to providing the best products and services to our customers. Our goal is to exceed expectations with every interaction and the deliver top-notch solution</p>
      </div>
      </div>
      <div class="mt-3 space-y-2 p-2">
        <h2 class="font-bold text-2xl ">Our Mission</h2>
        <p>Our mission is to deliver high-quality products that enhance the lives of our customers. We strive to innovate and grow, always keeping our values of integrity,transparency , and customer satisfaction at the core of everything we do .</p>
      </div>
      <div class="mt-2 space-y-2 p-2">
        <h2 class="text-2xl font-bold">Our Values</h2>
        <ul class="list-disc ml-6 ">
            <li>Customer Centricity</li>
            <li>Innovation</li>
            <li>integrity</li>
            <li>Collaboration</li>
            <li>Accountability</li>
        </ul>
      </div>
    </div>
</template>
<style scoped>  
/* div{
    color: white;
    font-size: 2xl;
    text-align: center;
} */
</style>