import React from "react";
import { useLoading } from "../../contexts/LoadingProvider";

const Spinner = () => {
  const { isLoading } = useLoading();

  return isLoading && <div data-testid="spinner" className="transparent-container"><div className="loader" /></div>;
};

export default Spinner;
