export const isAuthenticated = (bool) => {
  return {
    type: "IS_AUTHENTICATED",
    payload: {
      isAuthenticated: bool,
    },
  };
};
export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: {
      user: user,
    },
  };
};
