import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [name, setName] = useState("");

    return ( 
        <UserContext.Provider value={{ name, setName }}>
            {props.children}    
        </UserContext.Provider>
    );
}
 
export default UserContextProvider;