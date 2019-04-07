let heroId = 0;

export const setUniverse = universe => ({
  type: 'SET_UNIVERSE',
  payload: {
    universe
  }
});


export const addTodo = content => ({
  type: 'ADD_HERO',
  payload: {
    id: ++heroId,
    content
  }
});

export const findHero = filterValue => ({
  type: 'FIND_HERO',
  payload: {filterValue}
});
