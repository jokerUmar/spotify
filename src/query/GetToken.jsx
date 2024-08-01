import React, { useEffect } from "react";

let clientId = "f32ce623ed764954b528457cdaf9490c";
let clientSecretId = "3073974c477e4012b2a0df8f24f8a349";

function GetToken() {
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecretId,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res) => res.json())
      .then(data);
  }, []);

  return <div></div>;
}

export default GetToken;
