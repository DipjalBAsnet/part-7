import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(baseUrl);
        setResources(response.data);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      }
    };

    fetchResources();
  }, [baseUrl]);

  const create = async (newObject) => {
    try {
      const response = await axios.post(baseUrl, newObject);
      setResources([...resources, response.data]);
    } catch (error) {
      console.error("Failed to create resource:", error);
    }
  };

  return [resources, { create }];
};

export default useResource;
