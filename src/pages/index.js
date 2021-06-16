import React, { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Love, Scroll } from "./styles";
import { HStack, VStack, Container } from "./styles";
import Searchbar from "../components/Searchbar";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import withAuth from "../utils/withAuth";
import { wrapper } from "../store";
import { fetchProducts, productsLoaded, categoriesLoaded } from "../features/productSlice";

const Home = (props) => {
  const searchRef = useRef(null);
  const router = useRouter();

  const handleFocus = (e) => {
    router.push("/search");
  };

  const handleToWishListPage = () => {
    router.push("/wishlist");
  };

  return (
    <>
      <Head>
        <title>SehatQ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="Icon" href="../../public/favicon.ico" />
      </Head>
      <Container>
        <HStack>
          <Love onClick={handleToWishListPage} />
          <Searchbar ref={searchRef} handleFocus={handleFocus} />
        </HStack>
        <Scroll>
          {props.response.data.categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </Scroll>
        <VStack>
          {props.response.data.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </VStack>
      </Container>
      <Navigation />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    let response = await store.dispatch(fetchProducts());
    store.dispatch(productsLoaded(response.data.products))
    store.dispatch(categoriesLoaded(response.data.categories))
    return {
      props: {
        response
      },
    };
  }
);

export default withAuth(Home);
