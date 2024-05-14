"use client";
import { HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { HeaderButton, HeaderButtonsContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
    const { cartQuantity } = useCart();

    return (
       <HeaderContainer>
        <div className="container">
            <NavLink to="/">
                <img src={coffeeLogoImg} alt="Logo da Coffee Delivery" />
            </NavLink>
        < HeaderButtonsContainer>
            <HeaderButton variant="purple">
                <MapPin size={20} weight="fill"/>
                Salvador, BA
            </HeaderButton>
            <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
                {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                <ShoppingCart size={20} weight="fill"/>
                </HeaderButton>
            </NavLink>
        </ HeaderButtonsContainer>
        
        </div>

       </HeaderContainer>
    )
}