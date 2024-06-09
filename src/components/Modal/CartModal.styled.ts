import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 12px 0;
  width: 100%;
  height: 250px;
  overflow-y: scroll;
`;

export const CartList = styled.div`
  display: grid;
  gap: 24px;
  color: rgba(10, 13, 19, 1);
`;

export const CheckBoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: "32px 0";
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(10, 13, 19, 1);
`;

export const CheckBoxButton = styled.button`
  img {
    width: 24px;
    height: 24px;
  }
`;
