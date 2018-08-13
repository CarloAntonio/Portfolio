import React from 'react';

import Hero from './subComps/hero/hero';
import Overview from './subComps/overview/overview';
import Goals from './subComps/goals/goals';

const portfolioItem = (props) => {
    return (
        <div>
            <Hero data={props.data.hero}/>
            <Overview data={props.data.overview}/>
            <Goals goals={props.data.goals}/>
        </div>
    );
}

export default portfolioItem;