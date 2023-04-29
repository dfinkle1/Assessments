import React, { useState, useEffect } from "react";
import uuid from "uuid";

import axios from "axios";

const useAxios = (url, partUrl) => {
  const [responses, setResponses] = useState([]);

  const getData = async (partUrl) => {
    const apiUrl = partUrl ? `${url}${partUrl}/` : url;
    const res = await axios.get(apiUrl);
    console.log(res.data);
    setResponses((data) => [...data, { ...res.data, id: uuid() }]);
  };

  return [responses, getData];
};

export default useAxios;
