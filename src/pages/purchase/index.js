import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Back, Header } from "./styles";
import { Container, HStack } from "../styles";
import arrow from "../../assets/arrow_back.svg";
import Item from "../../components/Item";
import withAuth from "../utils/withAuth";

function PurchasedHistory() {
  const router = useRouter();
  const purchasedItem = useSelector(
    (state) => state.products.purchasedProducts
  );

  const handleBack = () => {
    router.push("/");
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Back src={arrow} onClick={handleBack} width="40px" height="40px" />
        <Header>Purchase History</Header>
      </div>
      {purchasedItem.length ? (
        purchasedItem.map((val, idx) => (
          <HStack key={idx}>
            <Item {...val} />
          </HStack>
        ))
      ) : (
        <> </>
      )}
    </Container>
  );
}

export default withAuth(PurchasedHistory);
