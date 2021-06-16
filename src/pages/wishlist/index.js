import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Back, Header } from "./styles";
import { Container } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import Item from "../../components/Item";

function Wishlist() {
  const router = useRouter();

  const wishListProducts = useSelector(
    (state) => state.products.wishListProducts
  );

  const handleBack = () => {
    router.push("/");
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Back src={arrow} onClick={handleBack} width={40} height={40} />
        <Header>Wishlist</Header>
      </div>
      {wishListProducts.map((val, idx) => (
        <Item key={idx} {...val} />
      ))}
    </Container>
  );
}

export default Wishlist;
