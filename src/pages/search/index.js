import React from "react";

import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../Hooks/hooks";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const articles = useSearch(query, 50);

  return <div>Search</div>;
};

export default Search;
