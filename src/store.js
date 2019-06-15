import { createStore, applyMiddleware, compose } from 'redux'
// import { applyMiddleware } from '../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleWare = [thunk]

const store = createStore( rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) )

export default store
