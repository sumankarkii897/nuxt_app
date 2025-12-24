import {ref ,computed} from 'vue';
export const useCounter=()=>{
   /*  const count=ref(0); 
    const multiplier=ref(1); */
    /* for share Component we use useState as useState automatically persist state globally across components in Nuxt */
    const count=useState<number>('count',()=>0);
    const multiplier=useState<number>('multiplier',()=>1);
    // const increaseCount=computed(()=>{
    //     return count.value++
    // })
    // const multiplyCount=computed(()=>{ 
    // return count.value * multiplier.value;
    // })
    // const increaseMultiplier=computed(()=>{
    //     return multiplier.value++
    // })
    const increaseCount=()=>{
        count.value++
    }     
    /* it is a function not a reactive so , we haave to call it like function in components */  
   const multiplyCount = () => { 
    return count.value * multiplier.value;
}
     
    const increaseMultiplier=()=>{
        multiplier.value++
    }  
    const decreaseCount=()=>{
        count.value--
    } 
    return { count, multiplier, increaseCount, multiplyCount,increaseMultiplier,decreaseCount };
}