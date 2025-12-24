export  const useUser=()=>{


    /* wrong concept 
    This cause collision if any component try to set different value to these states    
    const user=useState<string>("user",()=>"")
    const email=useState<string>("email",()=>"")
    const password=useState<string>("password",()=>"") */
    /* Best Practice -> use one object state */
    const user=useState<
    {
        name:string
        email:string
        password:string
    }>("user",()=>({
        name:"",
        email:"",
        password:""
    }));
    const setUser=(name:string,email:string,password:string)=>{
        user.value.name=name,
        user.value.email=email,
        user.value.password=password
        console.log("name:",name);
        console.log("email:",email);
        // console.log("password: ",password);
        /* trying to store data in localstorage */
      
      

    }
const clearUser=()=>{
    user.value.name="",
    user.value.email="",
    user.value.password=""
}
const logoutUser=()=>{
    clearUser();
    localStorage.removeItem("userName");
    alert("User logged out successfully!");
    navigateTo('/login');

}
    return {
        user,
        setUser,
        clearUser,
        logoutUser
    }
}