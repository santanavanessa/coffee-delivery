import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../QuantityInput";
import { RegularText, TitleText } from "../typography";
import { AddCartWrapper, CardFoooter, Description, Name, ProductCardContainer, Tags } from "./styles";
import { formatMoney } from "../../utils/formatMoney";

export interface Product {
    id: number;
    tags: string[];
    name: string;
    description: string;
    price: number;
    photo: string;
}
interface ProductProps {
    product: Product;
}
export function ProductCard({ product }: ProductProps) {
    const formattedPrice = formatMoney(product.price)

    return (
        <ProductCardContainer>
            <img src={`/coffees/${product.photo}`} />
            <Tags>
                {product.tags.map(tag => (
                    <span key={`${product.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <CardFoooter>
                <div>
                <RegularText size="s">R$</RegularText>
                <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput/>
                    <button>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFoooter>
          
        </ProductCardContainer>
    )
}