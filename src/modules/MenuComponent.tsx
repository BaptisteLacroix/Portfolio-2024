import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@nextui-org/react";
import {DarkModeToggle} from "./DarkModeToggle";
import {GithubIcon} from "./icons/navIcons/GithubIcon.tsx";
import {LinkedinIcon} from "./icons/navIcons/LinkedinIcon.tsx"; // Import your DarkModeToggle component

interface MenuComponentProps {
    onHomeClick: () => void;
    onFormationClick: () => void;
    onPortfolioClick: () => void;
    onSkillsClick: () => void;
}

export const MenuComponent: React.FC<MenuComponentProps> = ({
                                                                onHomeClick,
                                                                onFormationClick,
                                                                onPortfolioClick,
                                                                onSkillsClick,
                                                            }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {name: "Home", onClick: onHomeClick},
        {name: "Formation", onClick: onFormationClick},
        {name: "Portfolio", onClick: onPortfolioClick},
        {name: "Skills", onClick: onSkillsClick},
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed shadow-lg bg-white dark:bg-gray-900 px-6 md:px-12">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="flex items-center space-x-3">
                    <span className="text-xl font-bold text-gray-800 dark:text-gray-200">Baptiste Lacroix</span>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Menu Items */}
            <NavbarContent className="hidden md:flex gap-8 ml-auto" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} className="hover:text-primary">
                        <Link
                            className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 dark:text-blue-400 cursor-pointer"
                            onClick={item.onClick}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <DarkModeToggle/>
                </NavbarItem>
            </NavbarContent>

            {/* Social Icons and Dark Mode Toggle */}
            <NavbarContent className="flex items-center space-x-4 ml-auto" justify="end">
                <NavbarItem className="cursor-pointer">
                    <a href={"https://github.com/BaptisteLacroix"}
                       target={"_blank"}
                       aria-label={"Github"}>
                        <GithubIcon className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-600"/>
                    </a>
                </NavbarItem>
                <NavbarItem className="cursor-pointer">
                    <a href={"https://www.linkedin.com/in/lacroix-baptiste/"}
                       target={"_blank"}
                       aria-label={"Linkedin"}>
                        <LinkedinIcon className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-600"/>
                    </a>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            className="w-full text-lg"
                            color="foreground"
                            onClick={item.onClick}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <DarkModeToggle/>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};
