import React from 'react';

import SkillBar from 'react-skillbars';

import classes from './skill.css';
const colors = {
    "bar": "#c67c00",
    "title": {
      "text": "#000",
      "background": "#fff"
    },
}

const skill = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 px-0 pb-5 pr-md-3 px-lg-4 pb-md-0">
                        <h4>Project skills & expertise</h4>
                        <p>Top four skills used to execute this project and level of competency during the development of this project</p>
                    </div>

                    <div className="col-12 col-md-6 px-0 px-lg-4">
                        <SkillBar skills={props.skills} height={20} colors={colors}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skill;