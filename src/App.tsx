import {Home} from "./modules/Home.tsx";
import {MenuComponent} from "./modules/MenuComponent.tsx";
import {FormationComponent} from "./modules/FormationComponent.tsx";
import {PortfolioComponent} from "./modules/PortfolioComponent.tsx";
import SkillsSection from "./modules/SkillsSection.tsx";
import {useRef} from "react";
import CreditComponent from "./modules/CreditComponent.tsx";

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
            <div aria-hidden="true"
                 className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0">
                <img
                    src="/gradients/docs-left.webp"
                    className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt="docs left background" data-loaded="true"/>
            </div>
            <div aria-hidden="true"
                 className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12">
                <img src="/gradients/docs-right.webp"
                     className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                     alt="docs right background" data-loaded="true"/>
            </div>
            <div className={"overflow-hidden"}>
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
                <div>
                    <CreditComponent/>
                </div>
            </div>
        </>
    );
}

