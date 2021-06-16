import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ImageProduct, ProductName, Wrapper } from "./styles";
import { LoveOutline, LoveFill } from "../../pages/styles";
import { addWishList } from "../../features/productSlice";

function ProductCard({ id, imageUrl, title, loved }) {
  const dispatch = useDispatch();
  const handleAddWishList = () => {
    dispatch(addWishList(id));
  };

  return (
    <Wrapper>
      <Link href={`/product/${id}`}>
        <ImageProduct src={imageUrl} width={200} height={200} />
      </Link>
      <ProductName>{title}</ProductName>
      {loved ? (
        <LoveFill onClick={handleAddWishList} />
      ) : (
        <LoveOutline onClick={handleAddWishList} />
      )}
    </Wrapper>
  );
}

export default ProductCard;
