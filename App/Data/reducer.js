import { combineReducers } from 'redux';
import { authReducer } from './Authentification/reducer';
import { eventReducer } from './Event/reducer';
import { magazineReducer } from './Magazine/reducer';


export const reducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    magazine: magazineReducer
});
