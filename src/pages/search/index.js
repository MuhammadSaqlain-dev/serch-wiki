import React from "react";

import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../Hooks/hooks";

import Container from "../../components/Container";
import AutoComplete from "../../components/Autocomplete";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { articles, status } = useSearch(query, 50);

  return (
    <React.Fragment>
      <Container>
        {({ list, onValueChange, value }) => (
          <AutoComplete
            list={list}
            onValueChange={onValueChange}
            value={value}
          />
        )}
      </Container>

      {!articles.length && status === "SUCCESS" ? (
        <p>{`No Articles on Wikepedia found for search term: ${query}. Why don't you search on Google.`}</p>
      ) : (
        articles.map((article) => (
          <div key={article.id}>
            <a href={article.id} target="_blank">
              {article.label}
            </a>
          </div>
        ))
      )}
    </React.Fragment>
  );
};

export default Search;
