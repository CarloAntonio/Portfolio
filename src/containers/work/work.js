import React from 'react';

import classes from './work.css';

import { workData } from './data';

const work = () => {
    return (
        <div>
            <div className={classes.jumbo + " jumbotron jumbotron-fluid"}>
                <div className="container">
                    <div className={classes.content + " row"}>
                        <h1 className="col-12 display-4 text-white text-center">Portfolio</h1>
                        <p className="col-12 text-white text-center text-uppercase">Case studies of various past projects</p>
                    </div>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className="container">
                    <div className={classes.content + " row"}>
                        {workData.map((item, index) => {
                                return <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 wow fadeInUp" data-wow-delay={item.delay} key={index}>
                                            <a className={classes.link} href={item.link}>
                                                <div className="card">
                                                    <img className={classes.image + " card-img-top"} src={item.image} alt={item.title}/>
                                                    <div className={classes.contents + " card-body"}>
                                                        <p className="card-title text-center text-uppercase font-weight-bold">{item.title}</p>
                                                        <p className="card-text text-center text-uppercase">{item.date}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                            
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default work;