const initialState = "";

const filterHeroes = (state = initialState, action) => {
  if (action.type === "FIND_HERO") {
    return action.payload.filterValue;
  } else if (action.type === "SET_UNIVERSE") {
    return "";
  }
  return state;
};

export default filterHeroes;
