import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesAction from '../../actions/publicacionesActions';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
//Lista de acciones
const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: PublicacionestraerPorUsuario } = publicacionesAction; 



class Publicaciones extends Component{
 
   async componentDidMount(){
       const {
        usuariosTraerTodos,
        PublicacionestraerPorUsuario,
        match: { params: { key } }
       } = this.props;

        if(!this.props.usuariosReducers.usuarios.length){
           await usuariosTraerTodos();
        }
        if(this.props.usuariosReducers.error != ''){
            return;
        }
        if(!('publicaciones_key' in this.props.usuariosReducers.usuarios[ key ])){
            PublicacionestraerPorUsuario( key );
        }
    }

    ponerUsuario = () => {
        const {
            usuariosReducers,
            match: { params: { key } }
        } = this.props;

        
        if(!usuariosReducers.usuarios.length || usuariosReducers.cargando){
            return <Spinner />
        }
        if(this.props.publicacionesReducer.error){
            return <Fatal error={'algo salio mal'} />
        }
        const nombre = usuariosReducers.usuarios[key].name;
        return (
            <h1>
                publicaciones de {nombre}
            </h1>
        )
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Publicaciones De:</h1>
               {this.props.match.params.key}
               {this.ponerUsuario()}
            </div>
        )
    }
}

const mapStateToProps = ({usuariosReducers, publicacionesReducer }) => {
    return {
        usuariosReducers,
        publicacionesReducer
    };
}

const mapDispatchToProps = {
    usuariosTraerTodos,
    PublicacionestraerPorUsuario
}

export default connect( mapStateToProps, mapDispatchToProps )(Publicaciones);