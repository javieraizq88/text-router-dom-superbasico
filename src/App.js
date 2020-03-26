import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import injectContext from './store/appContext';
import Navbar from './components/navbar';
import ProductosCategoryProducto from './views/productos-category';
import ProductosProducto from './views/productos-producto';
import Productos from './views/productos';

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/productos/:category/:producto" component={ProductosCategoryProducto} /> 
                <Route exact path="/productos/:producto" component={ProductosProducto} /> 
                <Route exact path="/productos" component={Productos} /> 
                <Route exact path="/" component={Home} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}

export default injectContext(App);