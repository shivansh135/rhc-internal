export const msalConfig = {
  auth: {
    clientId: "087d5427-2255-48c9-869e-9428f0a88b20",
    authority: "https://login.microsoftonline.com/5030b96a-04c0-4332-92a2-b935cadbb142",
    redirectUri: "https://rhc-internal.vercel.app/",
  },
  cache: {
    cacheLocation: "localStorage", 
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case msal.LogLevel.Error:
            console.error(message);
            break;
          case msal.LogLevel.Info:
            console.info(message);
            break;
          case msal.LogLevel.Verbose:
            console.debug(message);
            break;
          case msal.LogLevel.Warning:
            console.warn(message);
            break;
        }
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

export const loginRequest = {
  scopes: [
    "user.read",
    "Tasks.Read",
    "Calendars.Read",
  ],
};
