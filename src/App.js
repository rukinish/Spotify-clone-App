import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null); //state shprt memory area

  //this will run based on condition
  useEffect(() => {
    //wen the app loads
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token); 

      spotify.setAccessToken(_token); //giving token to spotify api

      spotify.getMe().then(user =>{})
    }

  }, []);
  return (
    <div className="app">
      {
        token !== null ? (
          <Player />
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
