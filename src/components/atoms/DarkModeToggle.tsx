import React from 'react';
import { Switch } from "@nextui-org/react";
import {MoonIcon, SunIcon} from "@heroicons/react/16/solid";

export const DarkModeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(
        () => typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
    );

    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="flex items-center space-x-2">
            <Switch
                aria-label={'Toggle dark mode'}
                checked={isDarkMode}
                onChange={toggleTheme}
                className="mx-2"
                color="primary"
                startContent={<SunIcon className="w-5 h-5 text-yellow-500" />}
                endContent={<MoonIcon className="w-5 h-5 text-blue-500" />}
            />
        </div>
    );
};
