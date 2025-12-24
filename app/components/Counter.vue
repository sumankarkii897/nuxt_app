<script setup>
    const {count, increaseCount, multiplyCount,multiplier,increaseMultiplier}=useCounter();
</script>
<template>
    <div>
        <h2>Counter</h2>
       <h3>Count Value <span>{{ count }}</span></h3>
       <h3>Multiplier Value <span>{{ multiplier }}</span></h3>
       <h3>Multiply * Count Value <span>{{ multiplyCount()}}</span></h3>
       <button @click="increaseCount" class="border m-1 p-2 cursor-pointer">Increase Count</button>
       <button @click="increaseMultiplier" class="border m-1 p-2 cursor-pointer">Multiply Count</button>
    </div>
</template>