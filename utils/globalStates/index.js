import { useEffect, useRef, useState } from "react";

export default function useGlobalState() {
    const defaultMode = useRef(false);

    useEffect(() => {
        defaultMode.current = localStorage.getItem('darkmode')
    }, [])
        
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(defaultMode.current);
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
