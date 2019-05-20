import thunk from 'redux-thunk';
import {    
    createStore, 
    applyMiddleware, 
    combineReducers,
    compose
} from 'redux'

import ui from './reducers/ui-reducers'
import auth from './reducers/auth-reducers' 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ui,
    auth
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;