import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=74cd79a55a25470a923bd024f0b6b843&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className='d-flex justify-content- center'
      style={{ minHeight: "100vh" }}
    >
      <a className='button button-success' href={AUTH_URL}>
        Login with Spotify
      </a>
    </Container>
  );
}

//6:34
//AQAZkNPxJ1Zmmm91uIF9G1Z95sSGxR5Tosp2v5eqx4wobsx4vxhIq5Y1Xo6JNmP0o0FYlfKhub-UORgicObALMarTBE_c_irpfu5Wqt2K7HGbrTysU2XFC9WaSaIArtloHqFSts3iU2wspIS6os2DPzCZU-Uhq8jDqCUXOHUEVsb09xvwcs87hThdHU3YeufCAW5V1oynsyrEINd0CuB69CX_PcZeKB57MtzbDXM4IE6VEgMHbEqzrvE-p_fjasLN-3KUqQOJUN8pYyOdv0iA8mQ5BB1IVgnOjuy1O1EJWekpjXSnqcE55kNeSko5c-qVryY
