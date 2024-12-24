import React, { createContext, useContext, ReactNode, useState } from 'react'

interface isTMBool {
    isTM: boolean
}

const RouteContext = createContext<isTMBool>({ isTM: false })

interface Rout {
    children: ReactNode
}
export const RouteProvider: React.FC<Rout> = ({ children }) => {

    const [redirectPath, setRedirectPath] = useState(null);
    const path = sessionStorage.redirect;
    if (path) {
        sessionStorage.removeItem("redirect");
        setRedirectPath(path.replace(window.location.origin, ""))
    }
    const isTM = redirectPath ? true : false
    return (
        <RouteContext.Provider value={{ isTM }}>
            {children}
        </RouteContext.Provider>

    )
}

export const useRouteContext = (): isTMBool => {
    const context = useContext(RouteContext);
    if (!context) {
        throw new Error("useRouteContext must be used within a RouteProvider");
    }
    return context;
};