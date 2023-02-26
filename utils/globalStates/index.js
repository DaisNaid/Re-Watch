import { useEffect, useRef, useState } from "react";

export default function useGlobalState() {
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedTab, setSelectedTab] = useState('All');
    const [isUser, setIsUser] = useState(false);
    const [dominantColor, setDominantColor] = useState('#d4d4d8');
    const [displayRating, setDisplayRating] = useState(false);

    useEffect(() => {
        if(typeof window === 'object') {
            setIsDarkMode(JSON.parse(localStorage.getItem('darkmode')));
        }
    }, [])

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
        setDominantColor,
        displayRating,
        setDisplayRating
    };

    return (globalStates);
}
