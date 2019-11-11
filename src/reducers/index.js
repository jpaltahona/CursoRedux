import { combineReducers } from 'redux';
import usuariosReducers from './usuarioReducer';
import publicacionesReducer from './publicacionesReducer';
export default combineReducers({
    usuariosReducers,
    publicacionesReducer
});