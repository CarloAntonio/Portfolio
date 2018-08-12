import React from 'react';

import classes from './hero.css';

import slider1 from '../../../../assets/about/slider1.jpg'
import slider5 from '../../../../assets/about/slider5.jpg'
import slider6 from '../../../../assets/about/slider6.jpg'
import slider7 from '../../../../assets/about/slider7.jpg'

const hero = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 p-0">
                        <div className={classes.jumbo + " jumbotron jumbotron-fluid m-0 d-flex align-items-end"}>
                            <div className={classes.content + " container px-5"}>
                                <h1 className="display-4 text-white">Hello, I'm Carlo</h1>
                                <p className="lead text-white">I design and implement thoughtful websites for companies, businesses, and various events. I love being outdoors, creating videos, and being a gym rat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 p-0">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>
                            <div className={classes.carousel + " carousel-inner"}>
                                <div className="carousel-item h-100 active">
                                    <img className={classes.slider + " d-block w-100 h-100"} src={slider1} alt="First slide"/>
                                </div>
                                <div className="carousel-item h-100">
                                    <img className={classes.slider + " d-block w-100 h-100"} src={slider5} alt="Second slide"/>
                                </div>
                                <div className="carousel-item h-100">
                                    <img className={classes.slider + " d-block w-100 h-100"} src={slider6} alt="Third slide"/>
                                </div>
                                <div className="carousel-item h-100">
                                    <img className={classes.slider + " d-block w-100 h-100"} src={slider7} alt="Fourth slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;