import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/typography";
import { AddCartWrapper, CardFoooter, Description, Name, ProductCardContainer, Tags } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

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
    const [quantity, setQuantity] = useState(1);
    const { addCoffeeToCart }  = useCart();

    function handleIncrease() {
        setQuantity(state => state + 1);
    }

    function handleDecrease() {
        setQuantity(state => state - 1);
    }

    function handleAddToCard() {
        const coffeeToAdd = {
             ...product,
             quantity,
        }

        addCoffeeToCart(coffeeToAdd)
    }

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
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCard}>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFoooter>
          
        </ProductCardContainer>
    )
}