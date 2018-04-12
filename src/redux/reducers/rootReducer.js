import { combineReducers } from 'redux';
import {wordsReducer} from './wordsReducer';
import {shouldShowFormReducer } from './shouldShowFormReducer';
import {filterModeReducer } from './filterModeReducer';

export const rootReducer = combineReducers({
  words: wordsReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer
});