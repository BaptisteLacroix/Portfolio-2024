import {
    Badge,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem, NavbarMenuToggle
} from "@nextui-org/react";
import {GithubIcon} from "./icons/navIcons/GithubIcon.tsx";
import {LinkedinIcon} from "./icons/navIcons/LinkedinIcon.tsx";
import React from "react";

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
        { name: "Home", onClick: onHomeClick },
        { name: "Formation", onClick: onFormationClick },
        { name: "Portfolio", onClick: onPortfolioClick },
        { name: "Skills", onClick: onSkillsClick },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-lg bg-white px-6 md:px-12">
            {/* Branding Section */}
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="flex items-center space-x-3">
                    <span className="text-xl font-bold text-gray-800">Baptiste Lacroix</span>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Menu Items */}
            <NavbarContent className="hidden md:flex gap-8 ml-auto" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} className="hover:text-primary">
                        <Link
                            className="text-lg font-medium hover:text-blue-600 cursor-pointer"
                            onClick={item.onClick}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Social Icons */}
            <NavbarContent className="flex items-center space-x-4 ml-auto" justify="end">
                <NavbarItem
                    className="cursor-pointer"
                    onClick={() => window.open("https://github.com/BaptisteLacroix", "_blank")}
                >
                    <Badge color="primary" className="hover:bg-blue-100 transition duration-200">
                        <GithubIcon className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                    </Badge>
                </NavbarItem>
                <NavbarItem
                    className="cursor-pointer"
                    onClick={() => window.open("https://www.linkedin.com/in/lacroix-baptiste/", "_blank")}
                >
                    <Badge color="primary" className="hover:bg-blue-100 transition duration-200">
                        <LinkedinIcon className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                    </Badge>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            className="w-full text-lg"
                            color="foreground"
                            href="#"
                            onClick={item.onClick}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};
