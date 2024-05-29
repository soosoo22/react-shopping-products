import { MinusShoppingCartIcon, PlusShoppingCartIcon } from "../../assets";
import { BaseButton } from "./BaseButton";
import { StyledActionImg, StyledActionTitle, StyledContainer } from "./CartActionButton.styled";

export type CartActionButtonType = {
  actionType: "add" | "abstract";
};

export const CartActionButton = ({ actionType }: CartActionButtonType) => {
  return (
    <BaseButton onClick={() => {}}>
      <StyledContainer actionType={actionType}>
        <StyledActionImg
          src={actionType === "add" ? PlusShoppingCartIcon : MinusShoppingCartIcon}
        />
        <StyledActionTitle actionType={actionType}>
          {actionType === "add" ? "담기" : "빼기"}
        </StyledActionTitle>
      </StyledContainer>
    </BaseButton>
  );
};
