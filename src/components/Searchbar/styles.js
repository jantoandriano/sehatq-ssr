import styled from "styled-components";

export const InputSearch = styled.input`
  width: 100%;
  height: 30px;
  margin-left: 10px;
  border-radius: 15px;
  border: 1px solid black;
`;

export const Searchinput = styled.input`
  border: none;
  background-color: #ffffff;
  padding-left: 1rem;
  color: black;
  margin: 0 5px;

  ::placeholder {
    font-family: "Cabin", sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: left;
    color: #cecece;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchContainer = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  border: solid 1px #b8b8b8;
  background-color: var(--white);
  height: 30px;
  width: 100%;
  margin-left: 10px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  heigth: 24px;
  margin-left: 10px;
`;
