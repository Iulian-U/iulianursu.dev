const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refreshToken = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");
const TOKEN_ENDPOINT = import.meta.env.VITE_SPOTIFY_TOKEN_ENDPOINT;

// This gets the access token from Spotify to connect to the API using provided refresh token.
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString(),
  });
  return response.json();
};

// Get the current now playing track of given user access token.
const NOW_PLAYING_ENDPOINT = import.meta.env.VITE_SPOTIFY_NOW_PLAYING_ENDPOINT;
export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
