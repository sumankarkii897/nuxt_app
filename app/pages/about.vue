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
        <h1>About Page</h1>
        <!-- <img src="@/assets/karola.jpg" alt="Karola" class="mx-auto  w-48 h-48 mt-4"/> -->
        <Counter/>
         <!-- <PracticeUseUser/> -->
    </div>
</template>
<style scoped>  
div{
    color: white;
    font-size: 2xl;
    text-align: center;
}
</style>