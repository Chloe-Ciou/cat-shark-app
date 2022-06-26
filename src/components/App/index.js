import React from "react";
import "../../styles/App.scss";
import Loading from "../Spinner";
import Carousel from "../Carousel";
import APIProvider from "../../contexts/APIProvider";
import LoadingProvider from "../../contexts/LoadingProvider";

function App() {
  return (
    <LoadingProvider>
      <APIProvider>
        <Carousel />
        <Loading />
      </APIProvider>
    </LoadingProvider>
  );
}

export default App;
