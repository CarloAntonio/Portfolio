import React from 'react';

import classes from './memo.css';

const memo = () => {
    return (
        <section className={classes.wrapper}>
            <div className={classes.memo + " container"}>
                <p className={classes.name + " col-12 text-white text-center text-uppercase"}>About Me</p>
                <h1 className={classes.headline + " col-12 display-4 text-white text-center"}>
                    Hi, I'm Carlo, a front-end developer based in SF. I'm passionate about designing intuative and aesthetic interfaces and applying new technologies to solve old problems.
                </h1>
                <p className={classes.learn + " col-12 text-uppercase text-right"}><a href="#">Learn More</a></p>
            </div>
        </section>
    )
}

export default memo;