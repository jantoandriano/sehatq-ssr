import React, { useRef, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Love, Scroll } from "./styles";
import { HStack, VStack, Container } from "./styles";
import Searchbar from "../components/Searchbar";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import api from "../api/productApi";
import { fetchProducts } from "../features/productSlice";

const Home = (props) => {
  const searchRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleFocus = (e) => {
    router.push("/search");
  };

  const handleToWishListPage = () => {
    router.push("/wishlist");
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (props.categories !== undefined && props.products !== undefined) {
    return <h1>Loading...</h1>;
  }

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
          {props.response.categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </Scroll>
        <VStack>
          {props.response.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </VStack>
      </Container>
      <Navigation />
    </>
  );
};

export async function getStaticProps(context) {
  let response;
  try {
    let productApi = new api(
      "https://private-4639ce-ecommerce56.apiary-mock.com/home"
    );
    const { data } = await productApi.fetchProducts();

    response = data;

    dispatch(productsLoaded(response.products));
    dispatch(categoriesLoaded(response.categories));
    return response;
  } catch (err) {
    console.log(err, "===");
  }

  return {
    props: { response }, // will be passed to the page component as props
  };
}

export default Home;
