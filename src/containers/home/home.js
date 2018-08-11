import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faStackOverflow, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import carloHero from '../../assets/home-hero.jpg';

import classes from './home.css';

const home = () => {
    return (
        <div>
            <div className={classes.jumbo + " jumbotron jumbotron-fluid"}>
                <div className={classes.jumboContent + " container"}>
                    <div className="row">
                        <h1 className={classes.headline + " col-12 display-4 text-white text-center"}>Software Developer, Science Geek, Life-Long Learner</h1>
                        <p className={classes.name + " col-12 text-white text-center text-uppercase"}>Carlo Antonio Bilbao</p>
                        <ul className={classes.icons + " col-12 text-center"}>
                            <li><a href="https://www.linkedin.com/in/carlo-bilbao/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="https://github.com/CarloAntonio" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><a href="https://www.instagram.com/carloantoniob/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="https://stackoverflow.com/users/8305585/carlo-antonio-bilbao" target="_blank"><FontAwesomeIcon icon={faStackOverflow} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;