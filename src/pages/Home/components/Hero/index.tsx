import { BenefitsContainer, HeroContainer, HeroContent, HeroTitle } from "./styles";
import heroImg from "./../../../../assets/hero-img.svg"
import { RegularText } from "../../../../components/typography";
import { InfoWithIcon } from "../InfoWidthIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Hero() {
    const { colors } = useTheme()
    return (
        <HeroContainer>
            <HeroContent className="container">
                <div>
                    <section>
                        <HeroTitle size="xl">
                        Encontre o café perfeito para qualquer hora do dia
                        </HeroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>

                    <BenefitsContainer>
                        <InfoWithIcon 
                        iconBg={colors["brand-yellow-dark"]}
                        icon={<ShoppingCart weight="fill"/>} 
                        text="Compra simples e segura" 
                        />
                        <InfoWithIcon 
                        iconBg={colors["base-text"]}
                        icon={<Package weight="fill"/>} 
                        text="Embalagem mantém o café intacto" 
                        />
                        <InfoWithIcon 
                        iconBg={colors["brand-yellow"]}
                        icon={<Timer weight="fill"/>} 
                        text="Entrega rápida e rastreada" 
                        />
                        <InfoWithIcon 
                        iconBg={colors["brand-purple"]}
                        icon={<Coffee weight="fill"/>} 
                        text="O café chega fresquinho até você" 
                        />
                    </BenefitsContainer>
                </div>
                <img src={heroImg} alt="" />
            </HeroContent>
        </HeroContainer>
    )
}