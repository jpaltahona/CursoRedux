import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/publicacionesTypes';

export const traerTodos = () => async (dispatch) => {
 
    dispatch({
        type: CARGANDO
    })
    try{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
     
        dispatch({
            type: TRAER_TODOS,
            payload: respuesta.data,
            error: ''
        })
    }
    catch(error){
        dispatch({
            type: ERROR,
            payload: `Algo salio mal Intente más tarde Error: ${error.message}`
        })
    }    
}

export const traerPorUsuario = (key) => async (dispatch, getState) => {

    const { usuarios } = getState().usuariosReducers;
    const usuario_id = usuarios[key].id;
    const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`)

    dispatch({
        type: TRAER_TODOS,
        payload: respuesta.data
    })
}
