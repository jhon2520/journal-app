import { createStore,combineReducers, applyMiddleware,compose } from "redux";
import uiReducer from "../reducers/uiReducer";
import authReducer from "../reducers/authReducer";
import thunk from "redux-thunk";

// repositorio donde muestra como usar dos midleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui:uiReducer,
    auth: authReducer,
})

// el create reducer sólo recibe por defecto un reducer pero con la 
// funcion combineReducers puero combinar varios en caso de la que 
// cantidad de reducers aumente con el tiempo
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );