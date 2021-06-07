import React, { useState, Fragment } from 'react';
import { getPelis } from '../services';
import { Redirect } from 'react-router-dom';




const Search = () => {

    //constantes usestate
    const [peli, setPeli] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [error, setError] = useState('')
    const [alert, setAlert] = useState(false)

    //BUSCADOR BUTTON
    const buscar =  (e) =>{  
        e.preventDefault()
        async function api () {
            if(!busqueda.trim()) {
                setError('Campo vacio')
                setAlert(true)
                setTimeout(() => {
                    setAlert(false);
                }, 3000);
                return console.log('campo vacio')                
            }
            else{
                const res = await getPelis(busqueda)
                setPeli(res)
                if(peli.total_results === 0){
                    setError('No hay resultados para '+'"'+busqueda+'"')
                    setAlert(true)
                    setTimeout(() => {
                        setAlert(false);
                    }, 3000);
                }
                return res
            }
        }
        api()
    };

    

    return(
        <Fragment>
            <div className="container mt-5"> 
                <form onSubmit={buscar} className="form-group">
                    <div className="d-flex justify-content-center">
                        <div className="col-4">
                            <input 
                                onChange={ (e)=>{setBusqueda(e.target.value)} }
                                pattern="[A-Z Ñ-ñ ´ a-z - 0-9]{1,50}"
                                className="form-control m3 "
                                type="text"
                                placeholder=" peliculas"  
                            />
                        </div>
                        <input className="btn btn-info btn-block mx-2" type="submit" 
                               value="Buscar"
                        />
                    </div>
                </form>
                
            </div>               
            <div>
            {
                peli.total_results > 0 ?
                (
                    
                    <Redirect to={`/busqueda/${busqueda}`}  />
                    
                )
                :
                (
                    alert ?
                    (
                        <div className="d-flex justify-content-center my-5">
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        </div>
                    )
                    :
                    <span></span>
                )
            }
            </div>
                    
        </Fragment>
    )
}

export default Search;
