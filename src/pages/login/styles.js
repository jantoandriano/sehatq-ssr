import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50% 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const InputPassword = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 15px;
`;

export const InputEmail = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  padding-left: 15px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-betweeen;
  align-items: center;
  flex-direction: row;
`;

export const Button = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 10px;
`;

export const LoginFacebook = styled(Button)`
  color: white;
  background-color: blue;
`;

export const LoginGmail = styled(Button)`
  color: white;
  background-color: lightblue;
  margin-top: 20px;
`;

export const SignIn = styled(Button)`
  background-color: black;
  color: white;
  width: 140px;
`;
