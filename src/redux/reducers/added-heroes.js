const initialState = {
  allIds: [],
  byIds: {}
};

let isClick = false;

export default function(state = initialState, action) {
  if (action.type === "ADD_HERO") {
    const { content } = action.payload;
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
    } else if (state.byIds[content.name].counter < 15) { // сделал лимит добавление одного героя до 15
        state.byIds[content.name].counter++;
    }
  } else if (action.type === "HERO_PRESSED_TRUE") {
    const { content } = action.payload;
    const { allIds, byIds } = state;
    if ( allIds.length ) {
      const copy = Object.assign({}, byIds, {
        [content.name]: { ...state.byIds[content.name], isPressed: true }
      });
      return {
        allIds: state.allIds,
        byIds: copy
      };
    }
    return {
      allIds: state.allIds,
      byIds: state.byIds
    };
  } else if (action.type === "HERO_PRESSED_FALSE") {
    const { content } = action.payload;
    const { allIds, byIds } = state;
    if ( allIds.length ) {
      const copy = Object.assign({}, byIds, {
        [content.name]: { ...state.byIds[content.name], isPressed: false }
      });
      return {
        allIds: state.allIds,
        byIds: copy
      };
    }
    return {
      allIds: state.allIds,
      byIds: state.byIds
    };
  } else if (action.type === "HERO_DELETE") {
    const { event, content } = action.payload;
    const { allIds, byIds } = state;
    if (event.type === 'click') {
      isClick = true;
    } else {
      isClick = false;
      return {
        ...state
      };
    }
    let ids = allIds.filter(el => el !== content.name);
    let heroes = Object.keys(byIds)
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
