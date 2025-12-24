<script setup lang="js">
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';
    import { setPageLayout } from '#app';
    import { ref } from 'vue';
    const route=useRoute();
    const isCustomLayout=ref(false);
   const {count,decreaseCount}=useCounter();
    /*  Changing the layout dynamically use setPageLayout*/
    // onMounted(()=>{
    //     console.log("Current Layout is default");
    //     setPageLayout('default');
    // })
    
    // function enableCustomLayout(){
    //     isCustomLayout.value = !isCustomLayout.value;
    //    console.log("Button Clicked");
    //    /* isCustomLayout is a ref obj which is always true,so for condition rendering we use isCustomLayout.value */
    //    isCustomLayout.value
    //    ?
    //         setPageLayout('default')
    //         :
    //         setPageLayout('custom');
    //     console.log("Layout changed");
        
    // }
function enableCustomLayout(){
     isCustomLayout.value = !isCustomLayout.value;
        console.log("Button Clicked - Disable Layout");
        setPageLayout(isCustomLayout.value?'custom':'desktop-default');
        console.log("Layout changed",isCustomLayout.value?'custom':'desktop-default');
         }
    definePageMeta({
        layout: 'desktop-default',
    })
</script>
<template>
    <div>
        <h1>Blog Id : {{ route.params.id }}</h1>
        <button @click="enableCustomLayout" class="border p-1.5 m-1 bg-gray-500 text-white">Enable Custom Layout</button>
        <p>Value form shared state</p>
        <p>Count Value from useCounters : {{ count}} </p>
        <button class="border text-white" @click="decreaseCount">Decrease Count</button>
    </div>
</template>