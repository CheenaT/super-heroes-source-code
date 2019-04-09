export const getHeroesByUniverse = (store, universe) => {
  const { heroes, filterHeroes } = store;
  if (filterHeroes)
    return heroes[universe].filter(
      hero => hero.name.toLowerCase().indexOf(filterHeroes.toLowerCase()) !== -1
    );
  return heroes[universe];
};

export const getHeroesDC = (store) => {
  const { heroes, filterHeroes } = store;
  if (filterHeroes)
    return heroes['dc'].filter(
      hero => hero.name.toLowerCase().indexOf(filterHeroes.toLowerCase()) !== -1
    );
  return heroes['dc'];
};

export const getHeroesMarvel = (store) => {
  const { heroes, filterHeroes } = store;
  if (filterHeroes)
    return heroes['marvel'].filter(
      hero => hero.name.toLowerCase().indexOf(filterHeroes.toLowerCase()) !== -1
    );
  return heroes['marvel'];
};
