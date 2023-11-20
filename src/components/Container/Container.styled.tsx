import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;

  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1268px) {
    width: 1268px;

    padding-left: 20px;
    padding-right: 20px;
  }
`;
