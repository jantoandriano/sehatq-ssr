import styled from "styled-components";
import Image from "next/image";

export const ImageProduct = styled(Image)`
  border: 1px solid black;
`;

export const ProductName = styled.p`
  font-size: 15px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;

`;
