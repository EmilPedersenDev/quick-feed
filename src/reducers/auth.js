let initialState = {
  isLoggedIn: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "isLoggedIn":
      return {
        ...state,
        isLoggedIn: !!action.payload.user,
      };
    default:
      return state;
  }
};

export default auth;
