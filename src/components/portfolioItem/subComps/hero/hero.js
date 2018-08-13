import React from 'react';

import classes from './hero.css';

const hero = (props) => {

    return (
        <div className={classes.jumbo + " jumbotron jumbotron-fluid"} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.data.image})`}}>
            <div className="container">
                <div className={classes.content + " row"}>
                    <h1 className="col-12 display-4 text-white text-center">{props.data.title}</h1>
                    <p className="col-12 text-white text-center text-uppercase">{props.data.subTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default hero;