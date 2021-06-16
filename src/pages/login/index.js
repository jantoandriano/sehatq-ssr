import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Checkbox from "../../components/Checkbox";
import {
  Wrapper,
  Title,
  InputEmail,
  InputPassword,
  LoginFacebook,
  LoginGmail,
  SignIn,
} from "./styles";
import { VStack, HStack } from "../styles";
import {
  handleLoginFacebook,
  handleLoginGmail,
  fakeLogin
} from "../../features/authSlice";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(fakeLogin(router.push("/")))
  };

  const handleFacebook = async () => {
    dispatch(handleLoginFacebook());
  };

  const handleGmail = () => {
    dispatch(handleLoginGmail());
  };

  return (
    <Wrapper>
      <Title>LOGIN</Title>
      <VStack>
        <InputEmail type="text" />
        <InputPassword type="password" />
      </VStack>

      <HStack style={{ marginTop: "20px" }}>
        <Checkbox />
        <SignIn onClick={handleSignIn}>Sign in</SignIn>
      </HStack>

      <VStack style={{ marginTop: "20px" }}>
        <LoginFacebook onClick={handleFacebook}>
          <FaFacebookSquare style={{ marginRight: "10px" }} /> Sign in with
          Facebook
        </LoginFacebook>
        <LoginGmail onClick={handleGmail}>
          <SiGmail style={{ marginRight: "10px" }} />
          Sign in with Gmail
        </LoginGmail>
      </VStack>
    </Wrapper>
  );
}

export default Login;
