import React from "react";
import Link from "next/link";
import { Wrapper, Image, Body, Title, Price } from "./styles";

function Item({ id, title, price, imageUrl }) {
  return (
    <Link href={`product/${id}`}>
      <Wrapper>
        <Image src={imageUrl} />
        <Body>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </Body>
      </Wrapper>
    </Link>
  );
}

export default Item;
