import { createContext, useContext, useState } from "react";
import { MyTheme } from "../components/theme";

const sharedState = {
    menuIsExpanded: false,
    toggleExpandedMenu: (value: boolean) => { },
    mobileMenuWidth: '',
};

const AppContext = createContext(sharedState);

export function MyContextProvider({ children }) {
    const [menuIsExpanded, toggleExpandedMenu] = useState(false);
    // width of the side menu on mobile devices
    const mobileMenuWidth = MyTheme.sizes["2xs"];

    return (
        <AppContext.Provider value={{ menuIsExpanded: menuIsExpanded, toggleExpandedMenu: toggleExpandedMenu, mobileMenuWidth: mobileMenuWidth }}>
            {children}
        </AppContext.Provider >
    );
}

export function useAppContext() {
    return useContext(AppContext);
}

