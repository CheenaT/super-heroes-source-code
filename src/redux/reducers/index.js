import { combineReducers } from "redux";
import currentUniverse from "./universe";
import heroes from './heroes';
import addedHeroes from './added-heroes';
import filterHeroes from './filterHeroes';

export default combineReducers({ heroes, currentUniverse, addedHeroes, filterHeroes });
