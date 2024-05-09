import { coffees } from "../../data/coffees";
import { ProductCard } from "../ProductCard";
import { TitleText } from "../typography";
import { OurProductsContainer, ProductList } from "./styles";

export function OurProducts() {
    return (
        <OurProductsContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>
            <ProductList>
                {coffees.map((coffee) => (
                    <ProductCard key={coffee.id} product={coffee}/>
                ))}
                
            </ProductList>
        </OurProductsContainer>
    )
}