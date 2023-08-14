import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const useSearch = (query) => {
  const [state, setState] = useState([]);

  const ApiURL = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`;

  const cancelToken = useRef(null);

  useEffect(() => {
    if (query.length < 3) {
      return;
    }

    //Check if there are any previous pending requests
    if (cancelToken.current) {
      cancelToken.current.cancel();
    }

    //Save the cancel token for the current request
    cancelToken.current = axios.CancelToken.source();

    try {
      axios
        .get(ApiURL, { cancelToken: cancelToken.current.token }) //Pass the cancel token to the current request
        .then((res) => {
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
