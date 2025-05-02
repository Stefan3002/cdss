import {applyMiddleware, combineReducers, createStore} from "redux";
import {patientReducer} from "./reducers/patientReducer.js";
import {logger} from "redux-logger/src";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const reducers = combineReducers({
    patient: patientReducer,
})
const middlewares = applyMiddleware(logger)

const persistedReducer = persistReducer({
    key: 'root',
    storage,
}, reducers)

export const store = createStore(persistedReducer, middlewares)
export const persistor = persistStore(store)
