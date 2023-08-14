import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { useSearch } from "./Hooks/useSearch";

function App() {
  const [value, setValue] = useState("");

  const list = useSearch(value);

  return (
    <div className="App">
      <Autocomplete
        getItemValue={(item) => item.label}
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
