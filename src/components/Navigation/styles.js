import styled from "styled-components";

export const NavbarItem = styled.a`
  padding: 10px;
  border: 1px solid black;
  background-color: black;
  color: white;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: black;
  position: fixed;
  bottom: 0;
  height: 60px;
  align-items: center;
`;
