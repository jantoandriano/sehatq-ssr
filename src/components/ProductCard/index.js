import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductName, Wrapper } from "./styles";
import ImageComp from "../Image";
import { LoveOutline, LoveFill } from "../../pages/styles";
import { addWishList } from "../../features/productSlice";

function ProductCard({ id, imageUrl, title, loved }) {
  const dispatch = useDispatch();
  const handleAddWishList = () => {
    dispatch(addWishList(id));
  };

  return (
    <Wrapper>
      <Link href={`/product/${id}`} passHref={true}>
        <ImageComp
          src={imageUrl}
          width={200}
          height={200}
          blurDataURL={imageUrl}
          placeholder="blur"
        />
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
