import { createContext, useState } from "react";


export const FirebaseContext = createContext(null)

export const AuthContext = createContext(null)


export default function Context ({children}){
   const [user,Setuser] =useState('helo')

   return (
    <AuthContext.Provider value={{user,Setuser}}>
       {children}
    </AuthContext.Provider>
   )
}