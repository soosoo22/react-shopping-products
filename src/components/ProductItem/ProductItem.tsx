import { useState } from "react";
import { addCartItem, removeCartItem } from "../../api/cart";
import { CartActionButton } from "../Button/CartActionButton";
import {
  StyledContainer,
  StyledProductImg,
  StyledProductItem,
  StyledProductName,
  StyledProductPrice,
  StyledWrapper,
} from "./ProductItem.styled";

export const ProductItem = ({
  id,
  imageUrl,
  name,
  price,
}: Pick<ProductProps, "id" | "imageUrl" | "name" | "price">) => {
  const [isAddToCart, setIsAddToCart] = useState(false);

  const handleButtonClick = async () => {
    setIsAddToCart((prev) => !prev);
    try {
      if (isAddToCart) {
        await removeCartItem(id);
      } else {
        await addCartItem(id);
      }
    } catch (error) {
      console.error("Error handling cart action:", error);
    }
  };

  return (
    <StyledProductItem>
      <StyledProductImg src={imageUrl} alt={name} />
      <StyledContainer>
        <StyledWrapper>
          <StyledProductName>{name}</StyledProductName>
          <StyledProductPrice>{price}</StyledProductPrice>
        </StyledWrapper>
        <CartActionButton actionType={isAddToCart ? "sub" : "add"} onClick={handleButtonClick} />
      </StyledContainer>
    </StyledProductItem>
  );
};
