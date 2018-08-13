import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './interest.css';

import { interestData } from '../../data';

const interest = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">Other Interest</p>
                        <hr className={classes.line}/>
                    </div>
                </div>
                <div className="row">

                    {interestData.map((interest, index) => {
                        return <div className="col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={interest.delay} key={index}>
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <FontAwesomeIcon icon={interest.icon} size={"3x"} className={classes.icon}/>
                                        </div>
                                        <h5 className="text-center">{interest.title}</h5>
                                        <p>{interest.content}</p>
                                    </div>
                                </div>
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default interest;