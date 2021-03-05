import { config } from "./config";
import { PublicClientApplication } from "@azure/msal-browser";
import { isAuthenticated, setUser, setTeam } from "../store/actions/index";
import { getTeam, getUserDetails } from "./GraphProvider";
import store from "../store";

class AdProvider {
  constructor() {
    this.publicClientApplication = new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    });
  }

  async getAllAccounts() {
    const accounts = this.publicClientApplication.getAllAccounts();

    if (accounts && accounts.length > 0) {
      this.getUserProfile();
    }
  }

  async getUserProfile() {
    try {
      let accessToken = await this.getAccessToken(config.scopes);

      if (accessToken) {
        let user = await getUserDetails(accessToken);
        let team = await getTeam(accessToken);
        console.log(team);
        store.dispatch(isAuthenticated(true));
        store.dispatch(setUser(user));
        store.dispatch(setTeam(team));
      }
    } catch (err) {
      this.clearStore();
      console.error(err);
    }
  }

  async getAccessToken(scopes) {
    try {
      const accounts = this.publicClientApplication.getAllAccounts();
      if (accounts.length < 0) return;
      // Get the access token silently
      // If the cache contains a non-expired token, this function
      // will just return the cached token. Otherwise, it will
      // make a request to the Azure OAuth endpoint to get a token
      let silentResult = await this.publicClientApplication.acquireTokenSilent({
        scopes: scopes,
        account: accounts[0],
      });

      return silentResult.accessToken;
    } catch (err) {
      // If a silent request fails, it may be because the user needs
      // to login or grant consent to one or more of the requested scopes
      if (this.isInteractionRequired(err)) {
        let interactiveResult = await this.publicClientApplication.acquireTokenPopup(
          {
            scopes: scopes,
          }
        );
        return interactiveResult.accessToken;
      } else {
        throw new Error(err);
      }
    }
  }

  async login() {
    try {
      await this.publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      await this.getUserProfile();
      // store.dispatch(isAuthenticated(true));
    } catch (err) {
      this.clearStore();
      console.error(err);
    }
  }

  async logout() {
    try {
      await this.publicClientApplication.logout();
      this.clearStore();
    } catch (err) {
      console.error(err);
    }
  }

  clearStore() {
    store.dispatch(isAuthenticated(false));
    store.dispatch(setUser({}));
    store.dispatch(setTeam([]));
  }

  normalizeError(error) {
    let normalizedError = {};
    if (typeof error === "string") {
      let errParts = error.split("|");
      normalizedError =
        errParts.length > 1
          ? { message: errParts[1], debug: errParts[0] }
          : { message: error };
    } else {
      normalizedError = {
        message: error.message,
        debug: JSON.stringify(error),
      };
    }
    return normalizedError;
  }

  isInteractionRequired(error) {
    if (!error.message || error.message.length <= 0) {
      return false;
    }

    return (
      error.message.indexOf("consent_required") > -1 ||
      error.message.indexOf("interaction_required") > -1 ||
      error.message.indexOf("login_required") > -1 ||
      error.message.indexOf("no_account_in_silent_request") > -1
    );
  }
}

export default AdProvider;
