import React, { Fragment } from 'react';



const Home = () => {


    return (
        <Fragment>

            <div className="container ">
                <div className="row d-flex justify-content-center">

                    <div className="neon">
                        <div>
                            <h2 className="text-center display-1 mt-3">InfoPelis</h2>
                            
                        </div>
                        <p className="text-center display-6">ciro rey</p>
                    </div>
                    <div className="neonDiv">
                        <img 
                            className="card-img-top" 
                            alt="" 
                            src="https://images.pexels.com/photos/157543/pexels-photo-157543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                        />
                    </div>

                   
                    
                </div>
            </div>

        </Fragment>
    )
}

export default Home;
