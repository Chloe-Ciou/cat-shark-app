import { useState, useCallback } from "react";

import { useAPI } from "../contexts/APIProvider";
import { useLoading } from "../contexts/LoadingProvider";

export const useImages = () => {
  const api = useAPI();
  const { setIsLoading } = useLoading();
  const [images, setImages] = useState([]);

  const getImages = useCallback((types, cb) => {
    setIsLoading(true);

    api.get(`/images?types=${types.join(",")}`)
      .then((data) => {
        setImages(data.data);
      }).catch((_) => {
        setImages([]);
      }).finally(() => {
        cb?.();
        setIsLoading(false);
      });
  }, [api, setIsLoading]);

  return {
    images,
    getImages
  };
};
