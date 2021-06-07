import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';



const Nav = () => {

    

    //console.log(peliculas)

    return (
        <Fragment>
            <div></div>
            <div id="banner-img" className="sticky-top text-center neonDiv text-light rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <Link className="decoration" to="/">
                            <h2 className="display-4 font-weight-bold texto-title">InfoPelis</h2>
                        </Link>
                            <p className="font-weight-bold texto-sub">
                                Busca Información de tus películas favoritas
                            </p>                            
                        </div>
                    </div>
                </div>
                
            </div>
            <Search />
        </Fragment>
    )
}

export default Nav;
