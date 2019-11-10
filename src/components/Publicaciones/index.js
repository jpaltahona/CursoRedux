import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import * as usuariosReducers from '../../actions/usuariosActions';

class Publicaciones extends Component{

    componentDidMount(){

        if(!this.props.usuarios.length){
            this.props.traerTodos();
        }
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

const mapStateToProps = (store) => {
    return store.usuariosReducers;
}

export default connect( mapStateToProps, usuariosReducers )(Publicaciones);