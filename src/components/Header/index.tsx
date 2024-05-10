"use client";
import { HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { HeaderButton, HeaderButtonsContainer } from "../../layouts/DefaultLayout/styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from "react-router-dom";

export function Header() {
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
                <ShoppingCart size={20} weight="fill"/>
                </HeaderButton>
            </NavLink>
        </ HeaderButtonsContainer>
        
        </div>

       </HeaderContainer>
    )
}