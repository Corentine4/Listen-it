import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

require("dotenv").config({ path: "../../.env" });

function Musics() {
  // Stock into the State
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
  // [] Dependency array -> Don't have endless requests

  ///   //   return (
  //     <div className="musics">
  //       <ul>
  //         {data.map((Musics) => (
  //           <Card Musics={Musics} key={Musics.name} /> // Props -> give datas
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return (
    <>
      {musics.map((music) => (
        <Card music={music} key={music.name} />
      ))}
    </>
  );
}
export default Musics;
