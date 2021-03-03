export const setIsLoggedIn = (user) => {
  return {
    type: "isLoggedIn",
    payload: {
      user,
    },
  };
};
