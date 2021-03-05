let initialState = {
  isAuthenticated: false,
  user: {},
  error: undefined,
};

console.log(sessionStorage);

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "IS_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default auth;
