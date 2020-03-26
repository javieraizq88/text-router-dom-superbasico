import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const ProductosProducto = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1>Producto</h1>
            <ul>
                {
                    store.productos.map((producto, i) => {
                        if (props.match.params.producto == producto.id) {
                            return (
                                <li key={i}>
                                    {producto.name}&nbsp;
                                    <Link className="btn btn-success btn-sm" to={"/productos/" + producto.id}>
                                        Ver Detalle
                                    </Link>
                                    <button className="btn btn-primary btn-sm" onClick={
                                        () => {
                                            props.history.goBack()
                                        }
                                    }>
                                        Regresar
                                    </button>
                                    <button className="btn btn-primary btn-sm" onClick={
                                        () => {
                                            props.history.push("/productos")
                                        }
                                    }>
                                        Productos
                                    </button>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </>
    )
}

export default ProductosProducto;