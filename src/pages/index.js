import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Love, Scroll } from "./styles";
import { HStack, VStack, Container } from "./styles";
import Searchbar from "../components/Searchbar";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import { fetchProducts } from "../features/productSlice";

const Home = () => {
  const searchRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.products.categories);
  const products = useSelector((state) => state.products.productsName);

  const handleFocus = (e) => {
    router.push("/search-page");
  };

  const handleToWishListPage = () => {
    router.push("/wishlist");
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <HStack>
          <Love onClick={handleToWishListPage} />
          <Searchbar ref={searchRef} handleFocus={handleFocus} />
        </HStack>
        <Scroll>
          {categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </Scroll>
        <VStack>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </VStack>
      </Container>
      <Navigation />
    </div>
  );
};

export default Home;
