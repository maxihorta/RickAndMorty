
import {applyMiddleware, createStore, compose} from "redux"
import rootReducer from "../redux/reducer"
import thunkMiddleware from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
 )
export default store;