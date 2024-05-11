import { TitleText } from "../../../../components/typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle"/>
            Cafés selecionados
            <DetailsContainer>
                <CoffeeCartCard/>
                <CoffeeCartCard/>
                <CoffeeCartCard/>

                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}