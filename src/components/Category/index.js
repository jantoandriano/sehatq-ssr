import React from "react";
import { ImageCategory, CategoryTitle, Wrapper } from "./styles";

function Category({ imageUrl, name }) {
  return (
    <Wrapper>
      <ImageCategory src={imageUrl} width="50.4px" height="50.4px" blurDataURL={imageUrl} placeholder="blur" />
      <CategoryTitle>{name}</CategoryTitle>
    </Wrapper>
  );
}

export default Category;
