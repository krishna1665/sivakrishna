export const msalConfig = {
  auth: {
   
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    forceRefresh: false, // Set this to "true" to skip a cached token and go to the server to get a new
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
};
