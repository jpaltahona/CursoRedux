import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu';
import Usuarios from './Usuarios'
import Publicaciones from './Publicaciones';
 const Tareas = () => (
    <h1>Hello Tareas</h1>
    );

const App = () => (
    <BrowserRouter>
        <Menu />
        <div className="margin">  
            <Route exact  path='/' component={Usuarios} />
            <Route exact  path='/tareas' component={Tareas} />
            <Route path='/publicaciones/:key' component={Publicaciones}/>
        </div>
        
    </BrowserRouter>
);

export default App;