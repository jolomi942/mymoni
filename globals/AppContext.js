import { createContext, useState } from "react";

const AppContext= createContext();

function AppProvider ({children}){
    //destructuring
    const [email,setEmail]= useState('james@gmail.com');
    const [fullName, setFullName]= useState('james Elvis');

    return(
        <AppContext.Provider value={{email, setEmail, fullName, setFullName}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}



//create context