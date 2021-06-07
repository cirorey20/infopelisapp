import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pelicula } from '../services';
import Preloading from './Preloading';

const Modal = () => {
    const [peli, setPeli] = useState([])
    const [generos, setGeneros] = useState([])
    const [production, setProduction] = useState([])
    const {id} = useParams();
    const img = 'https://image.tmdb.org/t/p/w500/'
    const [loading, setLoading] = useState(true)

    

    const obtenerPeli = async () => {
        const res = await pelicula(id);
        setPeli(res)
        setGeneros(res.genres[0].name)
        setProduction(res.production_companies[0].name)
        return res
    }

    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1200)
        obtenerPeli();
    }, []);
    

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


                        <div className="col-md-12">
                            <div className="row">


                                    
                                    
                                        {
                                            loading ?
                                            (
                                                <Preloading/>
                                            )
                                            :
                                            (
                                                <div>
                                                    <div className="col-md-8">
                                                        <div className="text-light">
                                                            <dl>
                                                                <dt>Title </dt><dd>{peli.title}</dd>
                                                                <dt>Year</dt><dd>{peli.release_date}</dd>
                                                                <dt>Production</dt><dd>{production}</dd>
                                                                <dt>Gender</dt><dd>{generos}</dd>
                                                                <dt>Duration</dt><dd>{peli.runtime}min</dd>
                                                                <dt>Description</dt><dd>{peli.overview}</dd>                                                    
                                                                <dt>Rating</dt><dd>{peli.vote_average}</dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    {
                                                        peli.poster_path === null ?
                                                        (
                                                            <div className="col-md-4 ">
                                                                <img src="https://www.autocontrol.es/wp-content/themes/uplift/images/default-thumb.png" alt="" className="card-img-top shadow p-3 mb-5 bg-body rounded"/>
                                                            </div>
                                                        )
                                                        :
                                                        (
                                                            <div className="col-md-4 ">
                                                                <img className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="" src={img+peli.poster_path} />
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            )
                                            
                                        }
                                    
                                
                            </div>
                        </div>

                </div>
            </div>

        </Fragment>
    )
}

export default Modal;

/*
                                <div className="col-md-8">
                                    {
                                        (
                                            <div className="text-light">
                                                <dl>
                                                    <dt>Title </dt><dd>{peli.title}</dd>
                                                    <dt>Year</dt><dd>{peli.release_date}</dd>
                                                    <dt>Production</dt><dd>{production}</dd>
                                                    <dt>Gender</dt><dd>{generos}</dd>
                                                    <dt>Duration</dt><dd>{peli.runtime}min</dd>
                                                    <dt>Description</dt><dd>{peli.overview}</dd>                                                    
                                                    <dt>Rating</dt><dd>{peli.vote_average}</dd>
                                                </dl>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                                {
                                    peli.poster_path === null ?
                                    (
                                        <div className="col-md-4 ">
                                            <img src="https://www.autocontrol.es/wp-content/themes/uplift/images/default-thumb.png" alt="" className="card-img-top shadow p-3 mb-5 bg-body rounded"/>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="col-md-4 ">
                                            <img className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="" src={img+peli.poster_path} />
                                        </div>
                                    )
                                }
*/