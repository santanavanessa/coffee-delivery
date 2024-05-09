"use client";
import { HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { HeaderButton, HeaderButtonsContainer } from "../../layouts/DefaultLayout/styles";
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
    return (
       <HeaderContainer>
        <div className="container">
            <img src={coffeeLogoImg} alt="Logo da Coffee Delivery" />
        < HeaderButtonsContainer>
            <HeaderButton variant="purple">
                <MapPin size={20} weight="fill"/>
                Salvador, BA
            </HeaderButton>
            <HeaderButton variant="yellow">
                <ShoppingCart size={20} weight="fill"/>
            </HeaderButton>
        </ HeaderButtonsContainer>
        
        </div>

       </HeaderContainer>
    )
}