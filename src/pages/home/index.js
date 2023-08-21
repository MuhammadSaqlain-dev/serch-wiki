import React from "react";

import Container from "../../components/Container";
import AutoComplete from "../../components/Autocomplete";

import "./styles.scss";
import logo from "./logo.png";

const Home = () => {
  return (
    <div className="home-page-container">
      <img src={logo} alt="logo" />
      <Container>
        {({ list, onValueChange, value }) => (
          <AutoComplete
            list={list}
            onValueChange={onValueChange}
            value={value}
          />
        )}
      </Container>
    </div>
  );
};

export default Home;
