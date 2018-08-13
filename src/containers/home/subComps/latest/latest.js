import React from 'react';

import classes from './latest.css';

import { portfolioData } from '../../data'

const latest = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className={classes.subline + " text-uppercase text-center"}>Selected Work</p>
                        <p className={classes.subtitle + " text-uppercase text-center font-weight-bold h4"}>Latest Projects</p>
                        <hr className={classes.line}/>
                    </div>
                    
                    {portfolioData.map((item, index) => {
                        return <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 wow fadeInUp" data-wow-delay={item.delay} key={index}>
                                    <a className={classes.link} href={item.link} target="_blank">
                                        <div className="card">
                                            <img className={classes.image + " card-img-top"} src={item.image} alt={item.title}/>
                                            <div className={classes.contents + " card-body"}>
                                                <p className="card-title text-center text-uppercase font-weight-bold">{item.title}</p>
                                                <p className="card-text text-center text-uppercase">{item.service}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                    
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default latest;