import { OurProducts } from "./components/OurProducts";
import { Hero } from "./components/Hero";
import { HomeContainer } from "./styles";

export function HomePage() {
    return (
        
        <HomeContainer>
            <Hero/>
            <OurProducts/>
        </HomeContainer>
    )
}