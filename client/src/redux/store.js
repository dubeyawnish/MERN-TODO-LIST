import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {todosReducers} from './reducers/todosReducers.js'

//combine many reducer to single reducer

const reducer=combineReducers({
    todos:todosReducers
})

const middleware=[thunk];
// creating store 
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
  export default store;