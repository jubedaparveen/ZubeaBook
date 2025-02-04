import React, { createContext, useState } from 'react';


export const ContextVar = createContext();

const ContextApi = ({ children }) => {

    const [sidebarNav, setSidebarNav] = useState(false);
    
    const globalVer = {sidebarNav, setSidebarNav};

  return (
    <ContextVar.Provider value={globalVer}>
      {children}
    </ContextVar.Provider>
  )
}
export default ContextApi
