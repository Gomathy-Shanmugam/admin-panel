import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext()


export const UserProvider=({children})=>{
    const [name,setname] = useState("gomathy");
    const [bloglisting,setbloglisting]=useState([])
return <UserContext.Provider value={{name,setname,bloglisting,setbloglisting}}>
    {children}
</UserContext.Provider>
}

export default UserContext