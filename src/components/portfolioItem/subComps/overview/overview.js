import React from 'react';

import classes from './overview.css';

const overview = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12">
                        <h4 className={classes.summary +" text-center"}>{props.data.summary}</h4>
                    </div>
                </div>
                <div className={classes.content + " row"}>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div>
                            <p className="text-uppercase">client</p>
                            <hr/>
                            <p>{props.data.clientName}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div>
                            <p className="text-uppercase">industry</p>
                            <hr/>
                            <p>{props.data.clientIndustry}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div>
                            <p className="text-uppercase">service</p>
                            <hr/>
                            <p>{props.data.services}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div>
                            <p className="text-uppercase">date</p>
                            <hr/>
                            <p>{props.data.date}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <button className={classes.launch + " btn"}><a href={props.data.link} target="_blanck">Launch Website</a></button>
                </div>
            </div>
        </div>
    )
}

export default overview;