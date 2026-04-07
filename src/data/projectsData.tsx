import { AndroidIcon } from "../components/atoms/icons/languages/AndroidIcon";
import { BabylonJSIcon } from "../components/atoms/icons/languages/BabylonJSIcon";
import { CssIcon } from "../components/atoms/icons/languages/CssIcon";
import { FlaskIcon } from "../components/atoms/icons/languages/FlaskIcon";
import { HtmlIcon } from "../components/atoms/icons/languages/HtmlIcon";
import { JavaIcon } from "../components/atoms/icons/languages/JavaIcon";
import { JavascriptIcon } from "../components/atoms/icons/languages/JavascriptIcon";
import { MysqlIcon } from "../components/atoms/icons/languages/MysqlIcon";
import { NextUIIcon } from "../components/atoms/icons/languages/NextUIIcon";
import { PHPIcon } from "../components/atoms/icons/languages/PHPIcon";
import { PostgreSQLIcon } from "../components/atoms/icons/languages/PostgreSQLIcon";
import { PythonIcon } from "../components/atoms/icons/languages/PythonIcon";
import { ReactIcon } from "../components/atoms/icons/languages/ReactIcon";
import { TailwindIcon } from "../components/atoms/icons/languages/TailwindIcon";
import { TcpUdpIcon } from "../components/atoms/icons/languages/TcpUdpIcon";
import { TypescriptIcon } from "../components/atoms/icons/languages/TypescriptIcon";
import { WindowsIcon } from "../components/atoms/icons/languages/WindowsIcon";
import { Project } from "../types/Project";

export const projects: Project[] = [
    {
        title: 'projects.slidedeckml',
        img: './portfolio/slidedeckml/slidedeckml.webp',
        githubUrl: 'https://github.com/BaptisteLacroix/sse-dsl-SlideDeckML',
        descriptionKey: 'projects_desc.slidedeckml',
        featured: true,
        languages: [
            {name: 'Typescript', logo: <TypescriptIcon/>},
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>}
        ]
    },
    {
        title: 'projects.thermoscanai',
        img: './portfolio/thermoscanai/thermoscanai.webp',
        liveUrl: 'https://thermoscan.theo-vidal.fr',
        descriptionKey: 'projects_desc.thermoscanai',
        featured: true,
        languages: []
    },
        {
        title: 'projects.healthtracker',
        img: './portfolio/healthtracker/healthtracker.webp',
        githubUrl: 'https://github.com/Antoine-FdRg/HealthTracker',
        descriptionKey: 'projects_desc.healthtracker',
        featured: true,
        languages: [
            {name: 'Node.js', logo: <JavascriptIcon/>},
            {name: 'Typescript', logo: <TypescriptIcon/>},
            {name: 'PostgreSQL', logo: <PostgreSQLIcon/>},
        ]
    },
    {
        title: 'projects.terranumeria',
        img: './portfolio/terranumeria/terranumeria.webp',
        liveUrl: 'https://terra-numerica.org/',
        githubUrl: 'https://github.com/BaptisteLacroix/pns-algo2-terranumeria',
        descriptionKey: 'projects_desc.terranumeria',
        languages: [
            {name: 'Python', logo: <PythonIcon/>},
            {name: 'Flask', logo: <FlaskIcon/>},
            {name: 'React', logo: <ReactIcon/>},
            {name: 'Typescript', logo: <TypescriptIcon/>},
            {name: 'Tailwind', logo: <TailwindIcon/>}
        ]
    },
    {
        title: 'projects.games_on_web',
        img: './portfolio/gamesonweb/games-on-web.webp',
        liveUrl: 'https://tit0u4n.github.io/games-on-web-team-ficsit/',
        githubUrl: 'https://github.com/tit0u4n/games-on-web-team-ficsit',
        descriptionKey: 'projects_desc.games_on_web',
        languages: [
            {name: 'React', logo: <ReactIcon/>},
            {name: 'Typescript', logo: <TypescriptIcon/>},
            {name: 'BabylonJS', logo: <BabylonJSIcon/>},
            {name: 'NextUI', logo: <NextUIIcon/>},
            {name: 'Tailwind', logo: <TailwindIcon/>}
        ]
    },
    {
        title: 'projects.serveurless',
        img: './portfolio/serveurless/serveurless.webp',
        githubUrl: 'https://github.com/Antoine-FdRg/512Bank-ServeurLess',
        descriptionKey: 'projects_desc.serveurless',
        languages: [
            {name: 'React', logo: <ReactIcon/>},
            {name: 'Node.js', logo: <JavascriptIcon/>},
        ]
    },
    {
        title: 'projects.dechetri',
        img: './portfolio/dechetri.webp',
        githubUrl: 'https://github.com/BaptisteLacroix/DecheTri',
        descriptionKey: 'projects_desc.dechetri',
        languages: [
            {name: 'Java', logo: <JavaIcon/>},
            {name: 'Android', logo: <AndroidIcon/>},
        ]
    },
    {
        title: 'projects.merchant_website',
        img: './portfolio/merchant-website.webp',
        githubUrl: 'https://github.com/BaptisteLacroix/Merchant-Website/',
        descriptionKey: 'projects_desc.merchant_website',
        languages: [
            {name: 'PHP', logo: <PHPIcon/>},
            {name: 'MySQL', logo: <MysqlIcon/>},
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: 'projects.2048',
        img: './portfolio/2048.webp',
        liveUrl: 'https://baptistelacroix.github.io/2048-js/',
        githubUrl: 'https://github.com/BaptisteLacroix/2048-js',
        descriptionKey: 'projects_desc.2048',
        languages: [
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: 'projects.taquin',
        img: './portfolio/taquin.webp',
        liveUrl: 'https://baptistelacroix.github.io/Taquin-js/',
        githubUrl: 'https://github.com/BaptisteLacroix/Taquin-js',
        descriptionKey: 'projects_desc.taquin',
        languages: [
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'Python', logo: <PythonIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: 'projects.directory',
        img: './portfolio/S401-annuaire.webp',
        githubUrl: 'https://github.com/BaptisteLacroix/SAE401-Annuaire',
        descriptionKey: 'projects_desc.directory',
        languages: [
            {name: 'Python', logo: <PythonIcon/>},
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
            {name: 'Active Directory', logo: <WindowsIcon/>},
        ]
    },
        {
        title: 'projects.labyrinth',
        img: './portfolio/labyrinth.webp',
        githubUrl: 'https://github.com/BaptisteLacroix/Labyrinthe',
        descriptionKey: 'projects_desc.labyrinth',
        languages: [
            {name: 'Python', logo: <PythonIcon/>},
        ]
    },
    {
        title: 'projects.yfitops',
        img: './portfolio/Yfitops.webp',
        descriptionKey: 'projects_desc.yfitops',
        languages: [
            {name: 'Java', logo: <JavaIcon/>},
            {name: 'Android', logo: <AndroidIcon/>},
        ]
    },
    {
        title: 'projects.portfolio_2022',
        img: './portfolio/portfolio-2022.webp',
        githubUrl: 'https://github.com/BaptisteLacroix/Portfolio-2022',
        liveUrl: 'https://baptistelacroix.github.io/Portfolio-2022/',
        descriptionKey: 'projects_desc.portfolio_2022',
        languages: [
            {name: 'HTML', logo: <HtmlIcon/>},
            {name: 'Javascript', logo: <JavascriptIcon/>},
            {name: 'CSS', logo: <CssIcon/>},
        ]
    },
    {
        title: 'projects.space_shooter',
        img: './portfolio/spaceShooter.webp',
        descriptionKey: 'projects_desc.space_shooter',
        languages: [
            {name: 'Python', logo: <PythonIcon/>},
        ]
    },
        {
        title: 'projects.killbique',
        img: './portfolio/killbique.webp',
        descriptionKey: 'projects_desc.killbique',
        languages: [
            {name: 'Java', logo: <JavaIcon/>},
            {name: 'TCP/UDP', logo: <TcpUdpIcon/>},
        ]
    },
    {
        title: 'projects.citadel',
        img: './portfolio/citadel.webp',
        githubUrl: 'https://github.com/BaptisteLacroix/projet2-pns-23-24-citadels-2024-b',
        descriptionKey: 'projects_desc.citadel',
        languages: [
            {name: 'Java', logo: <JavaIcon/>},
        ]
    },
];
