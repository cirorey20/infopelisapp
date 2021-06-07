import React, { Fragment, useEffect, useState } from 'react';
import { getPelis } from '../services';
import { useParams, Link } from 'react-router-dom';
import Preloading from './Preloading';


const Peliculas = () => {
    const img = 'https://image.tmdb.org/t/p/w500/'
    const [peliculas, setPeliculas] = useState([])
    const {search} = useParams();
    const [loading, setLoading] = useState(true)

    

    async function api () {
            const res = await getPelis(search)
            setPeliculas(res.results)
            return res
        
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2000)
        api()
    }, [])
    
 
    
//    

    return (
        <Fragment>
            <div id="banner-img" className="sticky-top text-center neonDiv text-light rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <Link className="decoration" to="/">
                            <h2 className="display-4 font-weight-bold texto-title">Buscar</h2>
                        </Link>
                        <Link className="decoration" to="/">
                            <i className="bi bi-search buscador"></i>                     
                        </Link>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container mt-3">

                <div className="row d-flex justify-content-center">
                    {
                        loading ?
                        (
                            <Preloading/>
                        )
                        :
                        (
                            peliculas.map( (item, index) =>
                            (
                                    <div key={index} className="card tamaño-card m-2">
                                    
                                        <div className="card-body">
                                            <h3 className="card-title font-peliculas">{item.title}</h3>
                                            <h5 className="card-title font-peliculas">{item.release_date}</h5>
                                        </div>
                                        
                                            {
                                                item.poster_path === null ?
                                                (
                                                    <img src="https://www.autocontrol.es/wp-content/themes/uplift/images/default-thumb.png" alt="" className="card-img-top shadow p-3 mb-5 bg-body rounded"/>
                                                )
                                                :
                                                (
                                                    <Link to={`/pelicula/${item.id}`}> 
                                                    <img src={img+item.poster_path} alt="" className="card-img-top shadow p-3 mb-5 bg-body rounded"/>
                                                    </Link>
                                                )
                                            }
                                            
                                        
                                    </div>    
                                )
                                
                            )
                        )
                    }
                </div>
            </div>

        </Fragment>
    )
}

export default Peliculas;

/**
 peliculas.map( (item, index) =>
                            (
                                <div key={index} className="card tamaño-card m-2">
                                
                                    <div className="card-body">
                                        <h3 className="card-title font-peliculas">{item.title}</h3>
                                        <h5 className="card-title font-peliculas">{item.release_date}</h5>
                                    </div>
                                    
                                        {
                                            item.poster_path === null ?
                                            (
                                                <img src="https://www.autocontrol.es/wp-content/themes/uplift/images/default-thumb.png" alt="" className="card-img-top shadow p-3 mb-5 bg-body rounded"/>
                                            )
                                            :
                                            (
                                                <Link to={`/pelicula/${item.id}`}> 
                                                <img src={img+item.poster_path} alt="" className="card-img-top shadow p-3 mb-5 bg-body rounded"/>
                                                </Link>
                                            )
                                        }
                                        
                                    
                                </div>    
                            )
                            
                        )
 * 
 */