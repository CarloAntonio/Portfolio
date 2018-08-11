import React from 'react';

import SkillBar from 'react-skillbars';

import { progressData } from '../../data'

import classes from './skills.css';

const colors = {
    "bar": "#c67c00",
    "title": {
      "text": "#000",
      "background": "#fff"
    },
}

const skills = () => {
    return (
        <section className={classes.sColor}>
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-4 py-md-4">
                       <p className={classes.subtitle + " text-center font-weight-bold h4"}>Skill Set</p>
                        <hr className={classes.line}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={classes.subline + " text-center"}>Technologies</p>
                        <SkillBar skills={progressData.technologies} height={20} colors={colors}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={classes.subline + " text-center"}>Libraries</p>
                        <SkillBar skills={progressData.libraries} height={20} colors={colors}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={classes.subline + " text-center"}>Tools</p>
                        <SkillBar skills={progressData.tools} height={20} colors={colors}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={classes.subline + " text-center"}>Other</p>
                        <SkillBar skills={progressData.other} height={20} colors={colors}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default skills;