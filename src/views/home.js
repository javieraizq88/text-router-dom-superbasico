import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const Home = props => {
    const { actions } = useContext(Context);

    return (
        <>
            <h1>Home</h1>
            <h3>
                Bienvenido&nbsp;
        {
                    !!props.match.params.name ?
                        actions.getSaludo(props.match.params.name)
                        :
                        actions.getSaludo()
                }
            </h3>
        </>
    )
}

export default Home;