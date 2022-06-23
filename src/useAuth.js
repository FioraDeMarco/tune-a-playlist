import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accesssToken, setAccessToken] = useState();
  const [refreshToken, setrefreshToken] = useState();
  const [expiresIn, setexpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accesssToken);
        setrefreshToken(res.data.refreshToken);
        setexpiresIn(res.data.expiresIn);
        console.log("res.data", res.data);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    axios
      .post("http://localhost:3001/refresh", {
        refreshToken,
      })
      .then((res) => {
        //   setAccessToken(res.data.accesssToken);
        //   setrefreshToken(res.data.refreshToken);
        //   setexpiresIn(res.data.expiresIn);
        //   console.log("res.data", res.data);
        //   window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [refreshToken, expiresIn]);
  return accesssToken;
}
