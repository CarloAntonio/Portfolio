import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faStackOverflow, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import classes from './footer.css';

const footer = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className={classes.subline + " text-muted text-center"}>Bay Area Based | Software Developer | Videographer | Aspiring Entrepreneur</p>
                    </div>
                    <div className="col-12">
                        <p className={classes.follow + " text-muted text-center"}>
                            Follow Me:
                            <a href="https://www.linkedin.com/in/carlo-bilbao/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/CarloAntonio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.instagram.com/carloantoniob/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://stackoverflow.com/users/8305585/carlo-antonio-bilbao" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} /></a>
                        </p>
                    </div>
                    <hr />
                    <div className="col-12">
                        <p className={classes.copy + " text-muted text-center"}>&copy; 2018 Carlo Bilbao</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;