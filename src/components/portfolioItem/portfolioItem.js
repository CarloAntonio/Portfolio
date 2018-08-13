import React from 'react';

import Hero from './subComps/hero/hero';
import Overview from './subComps/overview/overview';

const portfolioItem = (props) => {
    return (
        <div>
            <Hero data={props.data.hero}/>
            <Overview data={props.data.overview}/>
        </div>
    );
}

export default portfolioItem;