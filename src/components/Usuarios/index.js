import React, {Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosReducers from '../../actions/usuariosActions';
import Spinner from '../general/Spinner.jsx';
import Faltal from '../general/Fatal.jsx';
import Tabla from './Tabla.jsx';

class Usuarios extends Component {

    componentDidMount(){
        if(!this.props.usuarios.length){
            this.props.traerTodos()
        }
    }
    ponerContenido = () => {
        if( this.props.cargando){
            return  <Spinner />
        }
        if(this.props.error){
            return <Faltal  error={this.props.error}/>
        }

        return <Tabla/>
    }
  
    render(){
        return (
            <div >
                <h1>Usuarios</h1>
               {this.ponerContenido()}
            </div>
            
        );
    } 
}

const mapStateToProps = (store) => {
    return store.usuariosReducers
}

export default connect(mapStateToProps, usuariosReducers)(Usuarios);
