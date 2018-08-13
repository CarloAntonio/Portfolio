import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import classes from './feedback.css';

const feedback = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} className={classes.icon}/>
                    <FontAwesomeIcon icon={faQuoteRight} size={"3x"} className={classes.icon}/>
                </div>
                <div className="row pt-5">
                    <div className="col-12">
                        <h5>{props.feedback.feedback}</h5>
                    </div>
                    <div className="col-12 d-flex justify-content-start justify-content-sm-center">
                        <p>{"- " + props.feedback.feedbackAuth}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
} 

export default feedback;