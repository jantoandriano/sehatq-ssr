import React from "react";
import Link from "next/link";
import { Wrapper, NavbarItem } from "./styles";

function Navigation() {
  return (
    <Wrapper>
      <Link href="/beranda" passHref>
        <NavbarItem>Home</NavbarItem>
      </Link>
      <Link href="/">
        <NavbarItem>Feed</NavbarItem>
      </Link>
      <Link href="/purchase">
        <NavbarItem>Cart</NavbarItem>
      </Link>
      <Link href="/wishlist">
        <NavbarItem>Profile</NavbarItem>
      </Link>
    </Wrapper>
  );
}

export default Navigation;
