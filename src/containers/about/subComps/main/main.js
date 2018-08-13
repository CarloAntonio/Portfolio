import React from 'react';

import classes from './main.css';

import profile from '../../../../assets/about/profile.jpg';

const main = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 wow fadeInLeft">
                        <p className={classes.highlight}>"When figuring what type of work you should do, treat it much like the rest of life, find things that make you lose track of time."</p>
                        <p>
                            I am both a software developer and biotech professional based in the San Francisco Bay Area. 
                            I'm passionate about using current and emerging technologies to help solve old problems. 
                            Specifically, problems that plague those that are less fortunate, marginalized, or in situations where they are not able to fix their predicament. 
                            It’s these problems and the avenues that new technology creates, that motivates me to learn and develop new skills and technologies.
                        </p>
                        <p>
                            Currently, I work as a freelance web developer helping businesses and individuals expand their market by create an online presence. 
                            Additionally, I partner up with other developers to tackle larger web applications and projects. 
                            The rest of my time is spent taking classNamees to earn my master's degree in Computer Science.
                        </p>
                        <p>
                            In the past, I earned my bachelor's degree in biochemistry and molecular biology at the University of California, Davis. (Go Aggies!) 
                            Professionally, I worked at a biotech company manufacturing DNA sequences for research and applied use for nearly 4 years. 
                            My love for science did not give way to technology, rather, I hope to combine them and, hopefully, have them compliment each other as 
                            I strive to help solve interesting problems that will hopefully help make people's lives better. 
                            If you'd like a more detailed view of my work history feel free to check out my LinkedIn: <a className={classes.link} href="https://www.linkedin.com/in/carlo-bilbao/">Here</a>.
                        </p>
                    </div>

                    <div className={classes.figContainer + " d-md-none d-lg-block col-12 col-lg-6 wow fadeInRight"}>
                        <figure className={classes.figure}>
                            <img alt="profile" src={ profile }/>
                            <figcaption>You&#39;re looking at my portfolio page, that&#39;s awesome :)</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default main;