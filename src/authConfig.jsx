export const msalConfig = {
    auth: {
      clientId: "087d5427-2255-48c9-869e-9428f0a88b20", // Replace with your Azure AD app's client ID
      authority: "https://login.microsoftonline.com/5030b96a-04c0-4332-92a2-b935cadbb142", // Replace with your tenant ID
      redirectUri: "https://rhc-dashboard.vercel.app/", // Replace with your redirect URI
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: true, // Set this to true if you are having issues on IE11 or Edge
    },
  };
  
  export const loginRequest = {
    scopes: ["User.Read"], // Add the scopes you need
  };
  