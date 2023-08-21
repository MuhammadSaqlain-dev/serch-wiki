import { useDebounce, useSearch, useSearchForm } from "../../Hooks/hooks";

const Container = ({ children }) => {
  const { onValueChange, value } = useSearchForm();
  const list = useSearch(useDebounce(value));

  return children({ list, onValueChange, value });
};

export default Container;
