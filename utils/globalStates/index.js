import { useState } from "react";

export default function useGlobalState() {
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [selectedTab, setSelectedTab] = useState('All');
    const [isUser, setIsUser] = useState(false);

    const globalStates = {
        showMenu,
        setShowMenu,
        isDarkMode,
        setIsDarkMode,
        selectedTab,
        setSelectedTab,
        isUser,
        setIsUser
    };

    return (globalStates);
}
