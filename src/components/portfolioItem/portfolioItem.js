import React from 'react';

import Hero from './subComps/hero/hero';
import Overview from './subComps/overview/overview';
import Goals from './subComps/goals/goals';
import Skill from './subComps/skills/skill';
import Feedback from './subComps/feedback/feedback';

const portfolioItem = (props) => {
    return (
        <div>
            <Hero data={props.data.hero}/>
            <Overview data={props.data.overview}/>
            <Goals goals={props.data.goals}/>
            <Skill skills={props.data.skills}/>
            <Feedback feedback={props.data.feedback}/>
        </div>
    );
}

export default portfolioItem;