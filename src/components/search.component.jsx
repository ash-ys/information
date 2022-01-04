import React from "react";

const Search = ({ handleChange, ...otherProps }) => {
  return <input onChange={handleChange} {...otherProps} />;
};

export default Search;