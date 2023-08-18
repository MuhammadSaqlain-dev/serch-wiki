import React from "react";

import "./style.css";

const index = ({ placeholder, ...rest }) => {
  return <input className="input-field" placeholder={placeholder} {...rest} />;
};

export default index;
