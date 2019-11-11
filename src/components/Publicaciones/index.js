import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesAction from '../../actions/publicacionesActions';

//Lista de acciones
const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: PublicacionestraerPorUsuario } = publicacionesAction; 



class Publicaciones extends Component{
 
   async componentDidMount(){
        if(!this.props.usuariosReducers.usuarios.length){
           await this.props.usuariosTraerTodos();
        }
        this.props. PublicacionestraerPorUsuario( this.props.match.params.key );
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Publicaciones De:</h1>
               {this.props.match.params.key}
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