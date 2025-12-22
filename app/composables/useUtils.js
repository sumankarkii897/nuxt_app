export const useUtils = () => {
    const greeting=()=>{

        console.log("Hello from useUtils");
        alert(" useUtils called");
    }
    return {
       greeting
    }
    
}