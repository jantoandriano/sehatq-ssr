import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = localStorage.getItem("access_token");
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/login");
      } else {
        // we call the api that verifies the token.
        const data = verifyToken(accessToken);
        // console.log(data, "verify");
        // if token was verified we set the state.
        if (data) {
          setVerified(true);
        } else {
          //   If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem("access_token");
          Router.replace("/");
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

function verifyToken(verifyToken) {
  // console.log(verifyToken, "verifyToken");
  if (!verifyToken) {
    return false;
  }
  return true;
}

export default withAuth;
