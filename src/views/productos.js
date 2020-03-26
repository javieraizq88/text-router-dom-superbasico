import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Productos = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1>Productos</h1>
            <ul>
                {
                    store.productos.map((producto, i) => {
                        return (
                            <li key={i}>
                                {producto.name}&nbsp;
                                <Link to={"/productos/"+producto.id+"/luis/rodriguez/"}>Ver Detalle</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Productos;