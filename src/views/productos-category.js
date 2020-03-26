import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ProductosCategoryProducto = props => {
    const { actions } = useContext(Context);
    return (
        <>
            <h1>Producto por Categoria</h1>
        </>
    )
}

export default ProductosCategoryProducto;