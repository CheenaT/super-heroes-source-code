const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  if (action.type === "ADD_HERO") {
    const { id, content } = action.payload;
    // content.counter = 1;
    if (state.allIds.indexOf(content.name) === -1) {
      return {
        ...state,
        allIds: [...state.allIds, content.name],
        byIds: {
          ...state.byIds,
          [content.name]: {
            content,
            counter: 1,
            isPressed: false
          }
        }
      };
    } else if (state.byIds[content.name].counter < 15) {
      console.log(" state : ", state.byIds[content.name].counter++); // изменяет
    }
  } else if (action.type === "HERO_PRESSED_TRUE") {
    const { content } = action.payload;
    const { byIds } = state;
    const copy = Object.assign({}, byIds, {
      [content.name]: { ...state.byIds[content.name], isPressed: true }
    });
    return {
      //
      allIds: state.allIds,
      byIds: copy
    };
  } else if (action.type === "HERO_PRESSED_FALSE") {
    const { content } = action.payload;
    const { byIds } = state;
    const copy = Object.assign({}, byIds, {
      [content.name]: { ...state.byIds[content.name], isPressed: false }
    });
    return {
      //
      allIds: state.allIds,
      byIds: copy
    };
    // return {
    //   //
    //   allIds: state.allIds,
    //   byIds: {
    //     ...state.byIds,
    //     [content.name]: { ...state.byIds[content.name], isPressed: true }
    //   }
    // };
  } else if (action.type === "HERO_DELETE") {
    const { content } = action.payload;
    const { allIds, byIds } = state;
    var ids = allIds.filter(el => el !== content.name);
    var heroes = Object.keys(byIds)
      .filter(key => key !== content.name)
      .reduce((result, current) => {
        result[current] = byIds[current];
        return result;
      }, {});
    return {
      allIds: ids,
      byIds: {
        ...heroes
      }
    };
  }
  return state;
}
