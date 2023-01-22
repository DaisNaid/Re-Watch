import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function useGlobalState() {
    const [defaultMode, setDefaultMode] = useState(false);
    
    useMediaQuery(
        {
          query: '(prefers-color-scheme: dark)',
        },
        undefined,
        (isSystemDark) => setDefaultMode(isSystemDark)
    );
        
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(defaultMode);
    const [selectedTab, setSelectedTab] = useState('All');
    const [isUser, setIsUser] = useState(false);
    const [dominantColor, setDominantColor] = useState('#d4d4d8');

    const globalStates = {
        showMenu,
        setShowMenu,
        isDarkMode,
        setIsDarkMode,
        selectedTab,
        setSelectedTab,
        isUser,
        setIsUser,
        dominantColor,
        setDominantColor
    };

    return (globalStates);
}
