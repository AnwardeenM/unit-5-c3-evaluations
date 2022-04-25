// import React from "react";
import {  createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState("false");
        const [token,setToken] = useState("");
        const handlelogin =()=>{
            setIsAuth({token : isAuth ? "true":"false"});
            setToken({tok});
        }
    return(
        <Authcontext.Provider value={{isAuth,handlelogin}}>
            {children}
            </Authcontext.Provider>
    )
}
