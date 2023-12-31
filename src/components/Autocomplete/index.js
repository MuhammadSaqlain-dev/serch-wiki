import React from "react";
import Autocomplete from "react-autocomplete";

import Input from "../Input";

import "./styles.scss";

const AutoComplete = ({ list, onValueChange, value }) => {
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
              <a className="search-link" href={`/search?query=${val}`}>
                See all results
              </a>
            </div>
          ) : (
            <></>
          )
        }
        items={list}
        renderItem={(item, highlighted) => (
          <div
            className="input-suggestions-item"
            key={item.id}
            style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
          >
            <a href={item.id} target="_blank">
              {item.label}
            </a>
          </div>
        )}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        onSelect={(val) => onValueChange(val)}
      />
    </div>
  );
};

export default AutoComplete;
