import React from "react";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Container from "./components/Container";
import AutoComplete from "./components/Autocomplete";

function App() {
  return (
    <Container>
      {({ list, onValueChange, value }) => (
        <AutoComplete list={list} onValueChange={onValueChange} value={value} />
      )}
    </Container>
  );
}

export default App;
