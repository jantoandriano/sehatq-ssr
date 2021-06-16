import React, { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useStore } from "react-redux";
import { Love, Scroll } from "./styles";
import { HStack, VStack, Container } from "./styles";
import Searchbar from "../components/Searchbar";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import api from "../api/productApi";
import { productsLoaded, categoriesLoaded } from "../features/productSlice";
import withAuth from "../utils/withAuth";

const Home = (props) => {
  const searchRef = useRef(null);
  const router = useRouter();
  const store = useStore();

  store.dispatch(productsLoaded(props.response.data.products));
  store.dispatch(categoriesLoaded(props.response.data.categories));

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

export async function getStaticProps() {
  let response;
  try {
    let productApi = new api(
      "https://private-4639ce-ecommerce56.apiary-mock.com/home"
    );
    let res = await productApi.fetchProducts();
    response = res;
  } catch (err) {
    console.log(err, "===");
  }

  return {
    props: { response },
  };
}

export default withAuth(Home);
