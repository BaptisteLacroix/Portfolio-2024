import { useRef } from "react";
import { PortfolioTemplate } from "../templates/PortfolioTemplate";
import { Home } from "../organisms/HomeSection";
import { MenuComponent } from "../organisms/MenuComponent";
import { FormationComponent } from "../organisms/FormationComponent";
import { PortfolioComponent } from "../organisms/PortfolioComponent";
import SkillsSection from "../organisms/SkillsSection";
import CreditComponent from "../molecules/CreditComponent";

export const PortfolioPage = () => {
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
        <PortfolioTemplate
            menu={
                <MenuComponent
                    onHomeClick={() => scrollToRef(homeRef)}
                    onFormationClick={() => scrollToRef(formationRef)}
                    onPortfolioClick={() => scrollToRef(portfolioRef)}
                    onSkillsClick={() => scrollToRef(skillsRef)}
                />
            }
            footer={
                <div>
                    <CreditComponent/>
                </div>
            }
        >
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
        </PortfolioTemplate>
    );
};
