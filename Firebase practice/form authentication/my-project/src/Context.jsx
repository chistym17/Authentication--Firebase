import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext=createContext(null)//create a context



export const Context = ({children}) => {


const createUser=(email,password)=>
{
return createUserWithEmailAndPassword(auth,email,password)

}


useEffect(()=>{

const unSubscribe=onAuthStateChanged(auth,currentUser=>{

setusers(currentUser)
return ()=>{
unSubscribe()
}

},[])




},[])



const [users,setusers]=useState(null)


const info=
{
createUser,users

}
    return (
        <AuthContext.Provider value={info}> 
            {children}  
        </AuthContext.Provider>
    );
};

export default Context;