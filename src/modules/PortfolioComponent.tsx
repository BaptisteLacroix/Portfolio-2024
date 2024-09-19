import {Pagination} from "@nextui-org/react";
import React, {ReactNode, useState} from "react";
import {ReactIcon} from "./icons/languages/ReactIcon.tsx";
import {TypescriptIcon} from "./icons/languages/TypescriptIcon.tsx";
import {BabylonJSIcon} from "./icons/languages/BabylonJSIcon.tsx";
import {NextUIIcon} from "./icons/languages/NextUIIcon.tsx";
import {TailwindIcon} from "./icons/languages/TailwindIcon.tsx";
import {PHPIcon} from "./icons/languages/PHPIcon.tsx";
import {JavascriptIcon} from "./icons/languages/JavascriptIcon.tsx";
import {HtmlIcon} from "./icons/languages/HtmlIcon.tsx";
import {CssIcon} from "./icons/languages/CssIcon.tsx";
import {JavaIcon} from "./icons/languages/JavaIcon.tsx";
import {TcpUdpIcon} from "./icons/languages/TcpUdpIcon.tsx";
import {PythonIcon} from "./icons/languages/PythonIcon.tsx";
import {WindowsIcon} from "./icons/languages/WindowsIcon.tsx";
import {AndroidIcon} from "./icons/languages/AndroidIcon.tsx";

export const PortfolioComponent = () => {
    return (
        <div className="container mx-auto p-8 min-h-[90vh]">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <PaginatedCardGrid cards={projects}/>
        </div>
    )
}

interface Project {
    title: string;
    img: string;
    url?: string;
    languages: { name: string, logo: ReactNode }[];
}

interface CardProps {
    card: Project;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

/**
 * Card Component with hover effect to display languages
 */
const Card = React.memo(({card, index, hovered, setHovered}: CardProps) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => {
            if (card.url) window.open(card.url, '_blank')
        }}
        className={`cursor-pointer rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-80 w-full transition-all duration-300 ease-out ${hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""}`}
    >
        <img
            src={card.img}
            alt={card.title}
            className={`object-cover absolute inset-0 w-full h-full hover:scale-100 ${hovered === index ? "scale-110" : ""} transition-transform duration-300 ease-out`}
        />
        <div
            className={`absolute inset-0 bg-black/50 flex py-8 px-4 transition-opacity duration-300 ${hovered === index ? "opacity-100" : "opacity-0"}`}>
            <div
                className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {/* Show languages on hover */}
                <ul>
                    {card.languages.map((language, idx) => (
                        <li className={'flex flex-row mr-5 mt-5 mb-5'} key={idx}>{language.logo}<span
                            className={"ml-2"}>{language.name}</span></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
));

Card.displayName = "Card";

/**
 * Paginated Card Grid Component
 * @param cards Projects to display
 * @constructor PaginatedCardGrid Component
 */
export function PaginatedCardGrid({cards}: { cards: Project[] }) {
    const [hovered, setHovered] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    // Calculate the projects for the current page
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentProjects = cards.slice(indexOfFirstItem, indexOfLastItem);

    // Total pages needed for pagination
    const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

    return (
        <div className="flex flex-col items-center">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto p-4 w-full">
                {currentProjects.map((card, index) => (
                    <Card
                        key={card.title}
                        card={card}
                        index={index}
                        hovered={hovered}
                        setHovered={setHovered}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-6">
                <Pagination
                    total={totalPages}
                    initialPage={currentPage}
                    onChange={(page) => setCurrentPage(page)}
                    showControls
                    className="gap-2"
                    variant="light"
                />
            </div>
        </div>
    );
}

const projects: Project[] = [
    {
        title: 'Games on Web 2024',
        img: './portfolio/games-on-web.png',
        url: 'https://tit0u4n.github.io/games-on-web-team-ficsit/',
        languages: [
            {name: 'React', logo: <ReactIcon/>},
            {name: 'Typescript', logo: <TypescriptIcon/>},
            {name: 'BabylonJS', logo: <BabylonJSIcon/>},
            {name: 'NextUI', logo: <NextUIIcon/>},
            {name: 'Tailwind', logo: <TailwindIcon/>}
        ]
    },
    {
        title: 'Merchant Website',
        img: './portfolio/merchant-website.png',
        url: 'https://github.com/BaptisteLacroix/Merchant-Website/',
        languages: [
            {name: 'PHP', logo: <PHPIcon/>},
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: 'KillBique',
        img: './portfolio/killbique.jpg',
        languages: [
            {name: 'Java', logo: <JavaIcon/>},
            {name: 'TCP/UDP', logo: <TcpUdpIcon/>},
        ]
    },
    {
        title: 'Citadel',
        img: './portfolio/citadel.jpg',
        url: 'https://github.com/BaptisteLacroix/projet2-pns-23-24-citadels-2024-b',
        languages: [
            {name: 'Java', logo: <JavaIcon/>},
        ]
    },
    {
        title: 'Directory',
        img: './portfolio/S401-annuaire.png',
        url: 'https://github.com/BaptisteLacroix/SAE401-Annuaire',
        languages: [
            {name: 'Python', logo: <PythonIcon/>},
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
            {name: 'Active Directory', logo: <WindowsIcon/>},
        ]
    },
    {
        title: 'Dechetri',
        img: './portfolio/dechetri.png',
        url: 'https://github.com/BaptisteLacroix/DecheTri',
        languages: [
            {name: 'Java', logo: <ReactIcon/>},
            {name: 'Android', logo: <AndroidIcon/>},
        ]
    },
    {
        title: 'Yfitops',
        img: './portfolio/Yfitops.png',
        url: 'https://github.com/BaptisteLacroix/Yfitops',
        languages: [
            {name: 'Java', logo: <ReactIcon/>},
            {name: 'Android', logo: <AndroidIcon/>},
        ]
    },
    {
        title: 'Portfolio 2022',
        img: './portfolio/portfolio-2022.png',
        url: 'https://github.com/BaptisteLacroix/Portfolio-2022',
        languages: [
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: '2048',
        img: './portfolio/2048.png',
        url: 'https://github.com/BaptisteLacroix/2048-js',
        languages: [
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: 'Taquin',
        img: './portfolio/taquin.png',
        url: 'https://github.com/BaptisteLacroix/Taquin-js',
        languages: [
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'Python', logo: <PythonIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: 'Space Shooter',
        img: './portfolio/spaceShooter.jpg',
        url: 'https://github.com/BaptisteLacroix/SpaceShooter',
        languages: [
            {name: 'Python', logo: <PythonIcon/>},
        ]
    },
    {
        title: 'Labyrinth',
        img: './portfolio/labyrinth.jpg',
        url: 'https://github.com/BaptisteLacroix/Labyrinthe',
        languages: [
            {name: 'Python', logo: <PythonIcon/>},
        ]
    },
];
