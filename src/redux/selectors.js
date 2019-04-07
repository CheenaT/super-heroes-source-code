import { heroes } from './heroes.js';

export const getHeroesByUniverse = (store, universe) => {
      return heroes[universe];
}
