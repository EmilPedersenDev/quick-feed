let initialState = {
  team: [],
};

const team = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEAM":
      return {
        ...state,
        team: action.payload.team,
      };
    default:
      return state;
  }
};

export default team;
