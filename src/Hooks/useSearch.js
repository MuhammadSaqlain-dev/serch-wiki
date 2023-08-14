import axios from "axios";
import { useEffect, useState } from "react";

export const useSearch = (query) => {
  const [state, setState] = useState([]);

  const ApiURL = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`;
  useEffect(() => {
    try {
      axios.get(ApiURL).then((res) => {
        const parsedData = [];

        for (let i = 0; i < res.data[1].length; i++) {
          parsedData.push({ id: i, label: res.data[1][i] });
        }
        setState(parsedData);
      });
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return state;
};
