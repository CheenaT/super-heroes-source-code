import { combineReducers } from "redux";
import currentUniverse from "./universe";
import heroes from './heroes';
import addedHeroes from './added-heroes';

export default combineReducers({ heroes, currentUniverse, addedHeroes });
