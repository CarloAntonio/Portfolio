import React from 'react';

import classes from './contact.css';

const contact = () => {
    return (
        <div className={classes.jumbo + " jumbotron jumbotron-fluid"}>
            <div className={classes.content + " container"}>
                <div className="row pb-5">
                    <p className="col-12 text-white text-center text-uppercase mb-1">Shoot Me An Email</p>
                    <h1 className="col-12 display-4 text-white text-center"><a href="mailto:cbilbao88@gmail.com">cbilbao88@gmail.com</a></h1>
                </div>
                <div className="row">
                    <p className="col-12 text-white text-center text-uppercase mb-1">Give Me A Call</p>
                    <h1 className="col-12 display-4 text-white text-center"><a href="tel:1-408-555-5555">1-510-253-3755</a></h1>
                </div>
            </div>
        </div>
    )
}

export default contact;