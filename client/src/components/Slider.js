import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import axios from "axios";
// import styles from "../styles/style.css";

function Slider() {
  const [data, setData] = useState([]);
  const musics = data;

  // Make a hook
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_LINK;

    // Get the api by the link
    axios
      .get(apiKey)

      // then = the promise
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="Carousel">
      <Carousel>
        {musics.map((music) => (
          <Card music={music} key={music.name} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
