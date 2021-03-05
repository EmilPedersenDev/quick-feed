import {
  Client,
  GraphRequestOptions,
  PageCollection,
  PageIterator,
} from "@microsoft/microsoft-graph-client";

function getAuthenticatedClient(accessToken) {
  const client = Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    },
  });

  return client;
}

export async function getUserDetails(accessToken) {
  const client = getAuthenticatedClient(accessToken);
  try {
    const user = await client
      .api("/me") /* .select("displayName") */
      .get();

    return user;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getTeam(accessToken) {
  const client = getAuthenticatedClient(accessToken);
  try {
    const team = await client
      .api("/groups/466ca589-3316-4395-8681-c5818b208daa/members")
      .get();
    return team.value;
  } catch (err) {
    throw new Error(err);
  }
}
