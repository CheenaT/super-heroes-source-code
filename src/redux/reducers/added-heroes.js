var scrollIntoView = require('scroll-into-view');

const initialState = {
  allIds: [],
  byIds: {}
};

let isClick = false;

export default function(state = initialState, action) {
  if (action.type === "ADD_HERO") {
    const { content } = action.payload,
            heroIndex = state.allIds.indexOf(content.name);
    if (state.allIds.indexOf(content.name) === -1) {
      setTimeout( function() { // сделать переход на героя после того как он добавится в DOM елси он не поместился на экране (героя добавленного первый раз)
        scrollIntoView(document.querySelectorAll(".hero")[state.allIds.length]);
      }, 0);
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
      // сделал лимит добавление одного героя до 15
      scrollIntoView(document.querySelectorAll(".hero")[heroIndex]);
      state.byIds[content.name].counter++;
    }
  } else if (action.type === "HERO_PRESSED_TRUE") {
    const { content } = action.payload;
    const { allIds, byIds } = state;
    if (allIds.length) {
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
    if (allIds.length) {
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
    if (event.type === "click") {
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
