import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  background-color: lavender;
`;

export const Back = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Share = styled.img`
  width: 30px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ProductBody = styled.div`
  margin: 15px 0;
`;

export const ProductTitle = styled.p`
  font-size: 20px;
  font-weight: bolder;
`;

export const ProductDesc = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-top: 15px;
  text-align: justify;
  line-height: 1.5;
`;

export const ProductPrice = styled.div`
  font-size: 20px;
`;

export const BuyButton = styled.div`
  width: 150px;
  height: 40px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const LoveFill = styled(BsFillHeartFill)`
  width: 30px;
  height: 30px;
  color: red;
`;

export const LoveOutline = styled(AiOutlineHeart)`
  width: 30px;
  height: 30px;
`;
