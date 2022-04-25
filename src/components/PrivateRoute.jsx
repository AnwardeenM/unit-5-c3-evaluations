import React from "react";
// import { createContext } from "react";

export const PrivateRoute =()=>{
    return(
        <>
        </>
    )
}
// export const PrivateRoute = createContext();

// export const PrivateRouteProvider = ({children})=>{
//     const [isAuth,setIsAuth] = useState("false");
//     const [token,setToken] = useState("");
//     const handlelogin =()=>{
//         setIsAuth({token : isAuth ? "true":"false"});
//         setToken({tok});
//     }
//     return(
//         <PrivateRoute.Provider value={{isAuth,PrivateRoute,handlelogin}}>
//             {children}
//             </PrivateRoute.Provider>
//         <div>
//             <h3 >this is privateRoute need Authentications to continue</h3>
//         </div>
//     )
// }