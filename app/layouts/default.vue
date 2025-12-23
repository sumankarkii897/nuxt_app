<script setup lang="ts">




</script>

<template>
  <div class="bg-gray-400 text-black flex flex-col min-h-screen ">
    <!-- <p>Some default layout content shared across all pages</p> -->
  <Header/>
  
  <main class="">
      <slot />
      <!-- The content of the page will be displayed in the <slot/> component -->
  </main>
    <Footer/>
  </div>
</template>
