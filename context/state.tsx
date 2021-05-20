import { createContext, useContext, useState } from "react";
import { MyTheme } from "../components/theme";

// default app-wide shared state
const sharedState = {
    menuIsExpanded: false,
    toggleExpandedMenu: (value: boolean) => { },
    mobileMenuWidth: '',
};

// create a new context
const AppContext = createContext(sharedState);

/**
 * Create a new context provider
 * 
 * @param param0 the provider's children
 * @returns the Context provider
 */
export function MyContextProvider({ children }) {
    // create some state for the navbar
    const [menuIsExpanded, toggleExpandedMenu] = useState(false);
    // width of the side menu on mobile devices
    const mobileMenuWidth = MyTheme.sizes["2xs"];

    return (
        <AppContext.Provider value={{ menuIsExpanded: menuIsExpanded, toggleExpandedMenu: toggleExpandedMenu, mobileMenuWidth: mobileMenuWidth }}>
            {children}
        </AppContext.Provider >
    );
}

/**
 * Function to consume context in a component
 * 
 * @returns the context
 */
export function useAppContext() {
    return useContext(AppContext);
}

