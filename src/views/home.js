import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Home = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            store.films.results != null ?
                                (
                                    <h1>Informacion Cargada</h1>
                                ) : (
                                    <div class="spinner-grow" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;