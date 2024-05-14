import { TitleText } from "../../../../components/typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    const { cartItems } =useCart();
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle"/>
            Cafés selecionados
            <DetailsContainer>
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item}/>
                ))}
                

                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}