import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Item from "../../components/Item";
import Searchbar from "../../components/Searchbar";
import filterSearch from "../../utils/filter";
import arrow from "../../assets/arrow_back.svg";
import { Back } from "./styles";
import { HStack, Container } from "../styles";
import withAuth from "../utils/withAuth";

function Search() {
  const [input, setInput] = useState("");
  const filterProduct = useSelector((state) =>
    filterSearch(input, state.products.productsName)
  );
  const searchRef = useRef();
  const router = useRouter();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleBack = () => {
    router.push("/");
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  return (
    <Container>
      <HStack>
        <Back src={arrow} onClick={handleBack} width="40px" height="40px" />
        <Searchbar ref={searchRef} value={input} handleSearch={handleSearch} />
      </HStack>
      {input && filterProduct.map((val) => <Item key={val.id} {...val} />)}
    </Container>
  );
}

export default withAuth(Search);
