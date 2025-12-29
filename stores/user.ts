import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
interface User{
    name:string,
    email:string,
    password:string,
}
export const useUserStore=defineStore('user',{
    state:()=>({
userList:[] as User[],
user:null as User | null,
// for local storage
/* when this.user updated, localstorage will be updated automatically */
// user:useLocalStorage<User | null > ('user',null)
    }),
    actions:{
        login(name:string,email:string,password:string){
           try {
             const exitingUser={name,email,password}
            
            this.userList.push(exitingUser)
            this.user=exitingUser
            // localStorage.setItem("user",JSON.stringify({name,email}))
            navigateTo("/")
           } catch (error) {
            console.log("Error occured in login",error);
            
            // console.log(error.message);
            
           }

        },
        logout(){
           try {
             this.user=null;
           } catch (error) {
            console.log("Error occured in logout",error);
            
           }
        },
        registerUser(name:string,email:string,password:string){
            try {
                const newUser={name,email,password}
                this.user=newUser
                navigateTo("/")
            } catch (error) {
                console.log("Error occured ",error);
                
            }
        }
    },
    persist:true
})