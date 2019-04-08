const DC_UNIVERSE = "dc";

const initialState = DC_UNIVERSE;

const universe = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UNIVERSE": {
      const marvelIcon = document.querySelector(".footer-universe-selecting__marvel-universe");
      const dcIcon = document.querySelector(".footer-universe-selecting__dc-universe");
      if ( action.payload.universe === 'dc' ) {
        marvelIcon.style.opacity = '0.2';
        dcIcon.style.opacity = '1';
      } else {
        dcIcon.style.opacity = '0.2';
        marvelIcon.style.opacity = '1';
      }
      return action.payload.universe;
    }
    default:
      return state;
  }
};

export default universe;
