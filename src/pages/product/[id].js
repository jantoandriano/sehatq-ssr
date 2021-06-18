import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import HeadTags from "../../components/HeadTags";
import { Container, HStack, FlexEnd } from "../styles";
import {
  ProductImageWrapper,
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
    router.push("/");
  };

  const handleShare = () => Toast("Shared 🦄");

  const handleBuy = () => {
    dispatch(purchaseProduct(id));
  };

  const handleAddWishList = () => {
    dispatch(addWishList(id));
  };

  return (
    <>
      <HeadTags title={title} imageUrl={imageUrl} description={description} />
      <Container>
        <div style={{ position: "relative" }}>
          <ProductImageWrapper>
            <Image src={imageUrl} width="200px" height="200px" />
          </ProductImageWrapper>
          <Back onClick={handleBack}>
            <Image src={arrow} width={40} height={40} />
          </Back>

          <Share onClick={handleShare}>
            <Image src={share} width={40} height={40} />
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
    </>
  );
}

export default DetailProduct
