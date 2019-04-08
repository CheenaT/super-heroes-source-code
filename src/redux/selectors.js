export const getHeroesByUniverse = (store, universe) => {
  const { heroes, filterHeroes } = store;
  if (filterHeroes)
    return heroes[universe].filter(
      hero => hero.name.toLowerCase().indexOf(filterHeroes.toLowerCase()) !== -1
    );
  return heroes[universe];
};
