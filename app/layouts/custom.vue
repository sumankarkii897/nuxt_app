<script setup>
    import bgImg from '~/assets/karola.jpg';
</script>
<template>
      <div class="flex flex-col min-h-screen"  :class="`text-white`"
       :style="`background-image: url(${bgImg}); background-size: cover; background-position: center;`">
        <Header/>
<main class="flex-1 p-6">
    <slot/>
</main>
<Footer />
    </div>
</template>