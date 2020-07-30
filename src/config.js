export const msalConfig = {
    auth: {
 
      redirectUri: "http://localhost:3000",
      postLogoutRedirectUri: "http://localhost:3000"
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false,
      forceRefresh: false
    }
  };  
export const loginRequest = {
    scopes: ["openid", "profile", "User.Read"],
  };