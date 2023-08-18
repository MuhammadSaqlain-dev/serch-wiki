import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { useDebounce, useSearch, useSearchForm } from "./Hooks/hooks";

import Input from "./components/Input";

function App() {
  const { onValueChange, value } = useSearchForm();
  const list = useSearch(useDebounce(value));

  return (
    <div className="App">
      <Autocomplete
        getItemValue={(item) => item.label}
        renderInput={Input}
        inputProps={{ placeholder: "Search Wikipedia: " }}
        renderMenu={(items, val, style) =>
          list && list.length ? (
            <div style={{ ...style }} className="input-suggessions">
              {items}
              <a href={`/search?query=${val}`}>See all results</a>
            </div>
          ) : (
            <></>
          )
        }
        items={list}
        renderItem={(item, isHighlighted) => (
          <div
            style={{ background: isHighlighted ? "lightgray" : "white" }}
            key={item.label}
          >
            {item.label}
          </div>
        )}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        onSelect={(val) => onValueChange(val)}
      />
    </div>
  );
}

export default App;
