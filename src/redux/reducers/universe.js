const DC_UNIVERSE = 'dc', MARVEL_UNIVERSE = 'marvel';

const initialState = DC_UNIVERSE;

const universe = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UNIVERSE': {
      return action.payload.universe;
    }
    default:
      return state;
  }
}

export default universe;
