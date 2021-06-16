import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Container, HStack, FlexEnd } from "../styles";
import {
  ProductImage,
  Back,
  Share,
  ProductBody,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  BuyButton,
  LoveFill,
  LoveOutline,
} from "./styles";
import arrow from "../../assets/arrow_back.svg";
import share from "../../assets/share.svg";
import { purchaseProduct, addWishList } from "../../features/productSlice";
import { share as Toast } from "../../utils/toast";

function DetailProduct() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { imageUrl, title, description, price, loved } = useSelector((state) =>
    state.products.productsName.find((product) => product.id === id)
  );

  const handleBack = () => {
    router.goBack();
  };

  const handleShare = () => Toast("Shared 🦄");

  const handleBuy = () => {
    dispatch(purchaseProduct(id));
  };

  const handleAddWishList = () => {
    dispatch(addWishList(id));
  };

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <ProductImage src={imageUrl} />
        <Back onClick={handleBack}>
          <Image src={arrow} onClick={handleBack} width={40} height={40} />
        </Back>

        <Share>
          <Image src={share} onClick={handleShare} width={40} height={40} />
        </Share>
      </div>

      <ProductBody>
        <HStack>
          <ProductTitle>{title}</ProductTitle>
          {loved ? (
            <LoveFill onClick={handleAddWishList} />
          ) : (
            <LoveOutline onClick={handleAddWishList} />
          )}
        </HStack>
        <ProductDesc>{description}</ProductDesc>
      </ProductBody>

      <FlexEnd>
        <ProductPrice>{price}</ProductPrice>
        <BuyButton onClick={handleBuy}>Buy</BuyButton>
      </FlexEnd>
    </Container>
  );
}

export default DetailProduct;
