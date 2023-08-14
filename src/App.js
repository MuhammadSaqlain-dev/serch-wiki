import React, { useEffect, useState } from "react";
import Autocomplete from "react-autocomplete";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const ApiURL = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value}`;

  useEffect(() => {
    try {
      axios.get(ApiURL).then((res) => {
        const parsedData = [];

        for (let i = 0; i < res.data[1].length; i++) {
          parsedData.push({ id: i, label: res.data[1][i] });
        }
        setList(parsedData);
      });
    } catch (error) {
      console.log(error);
    }
  }, [value]);

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
