import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Search from "./pages/search";
import NotFound from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    // <Container>
    //   {({ list, onValueChange, value }) => (
    //     <AutoComplete list={list} onValueChange={onValueChange} value={value} />
    //   )}
    // </Container>
  );
}

export default App;
