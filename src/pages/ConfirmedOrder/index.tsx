import { RegularText, TitleText } from "../../components/typography";
import { ConfirmedOrderContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg"
import { InfoWithIcon } from "../Home/components/InfoWidthIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function ConfirmedOrderPage() {

    const { colors } = useTheme()
    return (
        <ConfirmedOrderContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que logo o café chegará até você
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <InfoWithIcon
                    icon={<MapPin weight="fill"/>}
                    iconBg={colors["brand-purple"]}
                    text={
                        <RegularText>
                            <strong>Entrega em Rua João, 1034</strong>
                            <br />
                            Cabula - Salvador, BA
                        </RegularText>
                    }
                    />

                    <InfoWithIcon
                    icon={<Clock weight="fill"/>}
                    iconBg={colors["brand-yellow"]}
                    text={
                        <RegularText>
                            <strong>Previsão de entrega</strong>
                            <br />
                            20 min - 30 min
                        </RegularText>
                    }
                    />

<InfoWithIcon
                    icon={<CurrencyDollar weight="fill"/>}
                    iconBg={colors["brand-yellow-dark"]}
                    text={
                        <RegularText>
                            Pagamento na entrega
                            <br />
                            <strong>Cartão de Crédito</strong>
                        </RegularText>
                    }
                    />
                   
                </OrderDetailsContainer>
                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </ConfirmedOrderContainer>
    )
}