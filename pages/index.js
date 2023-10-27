import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";
import { StyledBox } from "@/components/StyledBox/index.js";

const FlexContainer = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <>
      <FlexContainer>
        <StyledBox $isBlack />
        <StyledBox />
      </FlexContainer>
      <FlexContainer>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
      </FlexContainer>
    </>
  );
}
