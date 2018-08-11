import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import classes from './nav.css';

const nav = () => {
    return (
        <nav className={classes.nav + " navbar navbar-expand-lg navbar-dark bg-dark"}>
            <div className="container justify-content-end">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className={classes.navItems + " navbar-nav"}>
                        <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Work</a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default nav;