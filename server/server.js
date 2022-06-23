const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "74cd79a55a25470a923bd024f0b6b843",
    clientSecret: "f3a54e5a5fdc4fecbb74544a4311948b",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log("The access token has been refreshed!", data.body);
      spotifyApi.setAccessToken(data.body["access_token"]);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "74cd79a55a25470a923bd024f0b6b843",
    clientSecret: "f3a54e5a5fdc4fecbb74544a4311948b",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.listen(3001);
