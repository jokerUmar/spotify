import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function Spotify__api() {
  let accessToken =
    "BQDsib9HsY9tJW4btaFllmA7Aej8TtO_VFusqraoVlWQTr7MOrR60yFqSgFEwi-UVT5HX4ZKo1oKL3a5GFleHkYklb2UkZmXDthgtrak6avZEKL5JmE";
  let { isLoading, data } = useQuery("main-api", () => {
    return axios.get(
      "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  });
  console.log(isLoading, data);
  return <div>api</div>;
}

export default Spotify__api;
