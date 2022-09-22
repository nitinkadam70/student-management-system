import {
    applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import { getDataReducer } from './get/reducer';
import { addDataReducer } from './post/reducer';
import thunk from 'redux-thunk'

//combine reducers
const rootReducer = combineReducers({
  get: getDataReducer,
  post: addDataReducer,
});

//reduxtool
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

//store
export const store = createStore(rootReducer, enhancer);
