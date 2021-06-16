import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`;

export const HStack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  margin: 30px 20px;
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LoveFill = styled(BsFillHeartFill)`
  width: 30px;
  height: 30px;
  bottom: 10px;
  right: 10px;
  color: red;
  position: absolute;
`;

export const LoveOutline = styled(AiOutlineHeart)`
  width: 30px;
  height: 30px;
  bottom: 10px;
  right: 10px;
  position: absolute;
`;

export const Love = styled(AiOutlineHeart)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const Scroll = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  overflow: auto;
`;
