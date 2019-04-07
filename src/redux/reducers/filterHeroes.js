const initialState = '';

const filterHeroes = (state = initialState, action) => {
  if (action.type === 'FIND_HERO') {
    console.log(' filterValue : ', action.payload.filterValue);
    return action.payload.filterValue;
  }
  console.log(' filterValue state', typeof state, state.length);
  return state;
}

export default filterHeroes;
