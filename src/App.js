import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { useDebounce, useSearch } from "./Hooks/useSearch";

import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  const list = useSearch(useDebounce(value));

  return (
    <div className="App">
      <Autocomplete
        getItemValue={(item) => item.label}
        renderInput={Input}
        inputProps={{ placeholder: "Search Wikipedia: " }}
        renderMenu={(items, val, style) => (
          <div style={{ ...style }} className="input-suggessions">
            {items}
            <a href={`/search?query=${val}`}>See all results</a>
          </div>
        )}
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
        onChange={(e) => setValue(e.target.value)}
        onSelect={(val) => setValue(val)}
      />
    </div>
  );
}

export default App;
