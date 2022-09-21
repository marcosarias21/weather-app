import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const getData = async () => {
    const { data } = axios(url);

    setDataFetch({
      loading: false,
      error: null,
      data,
    });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
