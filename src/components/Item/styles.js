import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  text-decoration: none;
  color: black;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  background-color: lavender;
  object-fit: cover;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: black; 
`;

export const Title = styled.p`
  font-size: 15px;
`;

export const Price = styled.p`
  font-size: 15px;
  margin-top: 20px;
`;
