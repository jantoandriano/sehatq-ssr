import styled from "styled-components";
import Image from "next/image";

export const ImageCategory = styled(Image)`
  width: 80px;
  height: 80px;
  border: 1px solid black;
`;

export const CategoryTitle = styled.p`
  font-size: 15px;
`;

export const Wrapper = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
