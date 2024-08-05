import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();
function Provider({ children }) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener("popstate", handler);
        return () => { window.removeEventListener("popstate", handler); };
    }, []);
    const navigate = (path) => {
        window.history.pushState({}, "", path);
        setCurrentPath(path);
    };
    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { Provider };
export default NavigationContext;