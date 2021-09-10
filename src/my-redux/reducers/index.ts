import {combineReducers} from 'redux';
import FirstReducer from './first.reducer';

const rootReducer = combineReducers({
  firstReducer: FirstReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export default rootReducer;
