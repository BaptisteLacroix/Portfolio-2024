import {Home} from "./modules/Home.tsx";
import {MenuComponent} from "./modules/MenuComponent.tsx";
import {FormationComponent} from "./modules/FormationComponent.tsx";
import {PortfolioComponent} from "./modules/PortfolioComponent.tsx";

export default function App() {
    return (
        <>
            <MenuComponent/>
            <Home/>
            <FormationComponent/>
            <PortfolioComponent/>
        </>
    );
}

