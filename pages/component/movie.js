import { useEffect, useState } from "react";
import axios from "axios";
import ViewData from "./ViewData";
const Movie = () => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios
      .get("https://itunes.apple.com/in/rss/topalbums/limit=25/json")
      .then(function (response) {
        console.log("response", response);

        return response.data;
      })
      .then(function (myJson) {
        const author = myJson.feed.author["name"].label;
        const icon = myJson.feed.icon.label;
        const title = myJson.feed.title.label;
        const data = myJson.feed.entry.map((item) => {
          return {
            artist: item["im:artist"].label,
            name: item["im:name"].label,
            image: item["im:image"][2].label,
            itemCount: item["im:itemCount"].label,
            author: author,
            icon: icon,
            title: title,
          };
        });
        console.log("data------->", data);
        setMovieData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return <>{movieData ? <ViewData apiData={movieData}></ViewData> : null}</>;
};
export default Movie;
