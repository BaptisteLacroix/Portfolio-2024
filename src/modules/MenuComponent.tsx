import {Badge, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {GithubIcon} from "./svg/GithubIcon.tsx";
import {LinkedinIcon} from "./svg/LinkedinIcon.tsx";

export const MenuComponent = () => {
    return <Navbar shouldHideOnScroll={false} className={"shadow-none bg-inherit"}>
        <NavbarBrand>
            <p className="font-bold text-inherit">Baptiste Lacroix</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <Link color="foreground" href="#">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Badge color="primary">
                    <GithubIcon className={"w-[30px] h-[30px]"}/>
                </Badge>
            </NavbarItem>
            <NavbarItem>
                <Badge color="primary">
                    <LinkedinIcon className={"w-[30px] h-[30px]"}/>
                </Badge>
            </NavbarItem>
        </NavbarContent>
    </Navbar>;
}