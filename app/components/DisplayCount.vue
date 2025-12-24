<script setup>
const {count,decreaseCount}=useCounter();

</script>
<template>
    <div>
        <h1>Display Count Component</h1>
        <p>Value form shared state</p>
        <p>Count Value from useCounters : {{ count}} </p>
        <button class="border text-white" @click="decreaseCount">Decrease Count</button>
    </div>
</template>