import React, { Fragment } from 'react';


const Preloading = () => {
    return (
        <Fragment>
             <div className="container mt-5">
                <div className="row d-flex justify-content-center">            

                    <div className="spinner-border text-light cargaPage " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Preloading;