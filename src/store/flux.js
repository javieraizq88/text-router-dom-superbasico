const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            saludo: "Hola",
            productos: {
                {id: 1, name: 'Pepsi', category: 1},
                {id: 2, name: 'Coca Cola', category: 1},
                {id: 3, name: 'Fanta', category: 1},
                {id: 4, name: 'Nachos', category: 2},
            }
        },
        actions: {
            getSaludo: (name="Anonimus") => {
                getPeople: url => {
                    fetch(url, {
                        method: "GET",
                        headers:{
                            "Content-Type": "application/json"
                        }
                    }) // por default es GET
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            people: data
                        });
                    }).catch(error => {
                        console.log(error)
                    })
                },
            },
        }
    }
}

export default getState;