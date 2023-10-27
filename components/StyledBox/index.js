import styled, { css } from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  //einzelnes Styling setzen
  background-color: ${(probs) => (probs.$isBlack ? "black" : "green")};
  &:hover {
    background-color: red;
    //mehrere Stylings setzen
    ${(probs) =>
      probs.$isBlack &&
      css`
        border-radius: 15px;
        box-shadow: 10px 5px 5px red;
      `}
  }
`;
