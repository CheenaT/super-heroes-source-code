import { heroes } from "../heroes.js";

const initialState = heroes;

export default function(state = initialState, action) {
  switch (action.type) {
    case "!FIND_HERO": {
      break;
    }
    default:
      return state;
  }
}
