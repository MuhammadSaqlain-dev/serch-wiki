import React from "react";

import Container from "../../components/Container";
import AutoComplete from "../../components/Autocomplete";

const Home = () => {
  return (
    <Container>
      {({ list, onValueChange, value }) => (
        <AutoComplete list={list} onValueChange={onValueChange} value={value} />
      )}
    </Container>
  );
};

export default Home;
