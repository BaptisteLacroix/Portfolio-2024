import {Home} from "./modules/Home.tsx";
import {MenuComponent} from "./modules/MenuComponent.tsx";
import {FormationComponent} from "./modules/FormationComponent.tsx";
import {PortfolioComponent} from "./modules/PortfolioComponent.tsx";
import SkillsSection from "./modules/SkillsSection.tsx";
import {useRef} from "react";


// Create  a component that will contain all the components and the ref of each component so when we click on the menu we can scroll to the component


export default function App() {
    const homeRef = useRef<HTMLDivElement>(null);
    const formationRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <>
            <MenuComponent
                onHomeClick={() => scrollToRef(homeRef)}
                onFormationClick={() => scrollToRef(formationRef)}
                onPortfolioClick={() => scrollToRef(portfolioRef)}
                onSkillsClick={() => scrollToRef(skillsRef)}
            />
            <div ref={homeRef}>
                <Home/>
            </div>
            <div ref={formationRef}>
                <FormationComponent/>
            </div>
            <div ref={portfolioRef}>
                <PortfolioComponent/>
            </div>
            <div ref={skillsRef}>
                <SkillsSection/>
            </div>
        </>
    );
}

