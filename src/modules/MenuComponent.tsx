import React from "react";
import {Badge, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {GithubIcon} from "./svg/GithubIcon.tsx";
import {LinkedinIcon} from "./svg/LinkedinIcon.tsx";

export interface MenuComponentProps {
    onHomeClick: () => void;
    onFormationClick: () => void;
    onPortfolioClick: () => void;
    onSkillsClick: () => void;
}

export const MenuComponent = ({
                                  onHomeClick,
                                  onFormationClick,
                                  onPortfolioClick,
                                  onSkillsClick,
                              }: MenuComponentProps) => {
    return (
        <Navbar shouldHideOnScroll={false} className="shadow-lg bg-white px-6 md:px-12">
            {/* Branding Section */}
            <NavbarBrand className="flex items-center space-x-3">
                <span className="text-xl font-bold text-gray-800">Baptiste Lacroix</span>
            </NavbarBrand>

            {/* Menu Items */}
            <NavbarContent className="hidden md:flex gap-8 ml-auto" justify="center">
                <NavbarItem className="hover:text-primary">
                    <Link className="text-lg font-medium hover:text-blue-600 cursor-pointer" onClick={onHomeClick}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-lg font-medium hover:text-blue-600 cursor-pointer" onClick={onFormationClick}>
                        Formation
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-lg font-medium hover:text-blue-600 cursor-pointer" onClick={onPortfolioClick}>
                        Portfolio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-lg font-medium hover:text-blue-600 cursor-pointer" onClick={onSkillsClick}>
                        Skills
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Social Icons */}
            <NavbarContent className="flex items-center space-x-4 ml-auto" justify={"end"}>
                <NavbarItem
                    className={"cursor-pointer"}
                    onClick={() => window.open("https://github.com/BaptisteLacroix", "_blank")}
                >
                    <Badge
                        color="primary"
                        className="hover:bg-blue-100 transition duration-200"
                    >
                        <GithubIcon className="w-6 h-6 text-gray-700 hover:text-blue-600"/>
                    </Badge>
                </NavbarItem>
                <NavbarItem
                    className={"cursor-pointer"}
                    onClick={() => window.open("https://www.linkedin.com/in/lacroix-baptiste/", "_blank")}
                >
                    <Badge color="primary" className="hover:bg-blue-100 transition duration-200">
                        <LinkedinIcon className="w-6 h-6 text-gray-700 hover:text-blue-600"/>
                    </Badge>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
