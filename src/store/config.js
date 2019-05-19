import thunk from 'redux-thunk';
import {    
    createStore, 
    applyMiddleware, 
    combineReducers,
    compose
} from 'redux'

import ui from './reducers/ui-reducers' 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ui,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;