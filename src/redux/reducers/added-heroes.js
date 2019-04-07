const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  if (action.type == "ADD_HERO") {
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
            counter: 1
          }
        }
      };
    } else {
        console.log(' state : ', state.byIds[content.name].counter++);

    }
  }

  return state;
}

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_HERO": {
//       const { id, content } = action.payload;
//       return {
//         ...state,
//         allIds: [...state.allIds, id],
//         byIds: {
//           ...state.byIds,
//           [id]: {
//             content
//           }
//         }
//       };
//     }
//     default:
//       return state;
//   }
// }
