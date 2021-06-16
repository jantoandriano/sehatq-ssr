import React from "react";
import { useRouter } from "next/router";
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
import { share as Toast } from '../../utils/toast'

function DetailProduct() {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { imageUrl, title, description, price, loved } = useSelector((state) =>
    state.products.productsName.find((product) => product.id === id)
  );

  const handleBack = () => {
    router.goBack();
  };

  const handleShare = () => Toast("Shared 🦄")

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
        <Back src={arrow} onClick={handleBack} />
        <Share src={share} onClick={handleShare} />
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
