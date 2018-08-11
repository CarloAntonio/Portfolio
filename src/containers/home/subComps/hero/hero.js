import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faStackOverflow, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import classes from './hero.css';

const hero = () => {
    return (
        <div>
            <div className={classes.jumbo + " jumbotron jumbotron-fluid"}>
                <div className={classes.jumboContent + " container"}>
                    <div className="row">
                        <p className={classes.name + " col-12 text-white text-center text-uppercase"}>Carlo Antonio Bilbao</p>
                        <h1 className={classes.headline + " col-12 display-4 text-white text-center"}>Software Developer, Science Geek, Life-Long Learner</h1>
                        <ul className={classes.icons + " col-12 text-center"}>
                            <li><a href="https://www.linkedin.com/in/carlo-bilbao/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="https://github.com/CarloAntonio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="https://www.instagram.com/carloantoniob/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="https://stackoverflow.com/users/8305585/carlo-antonio-bilbao" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;