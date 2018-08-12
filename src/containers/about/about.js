import React from 'react';

import Hero from './subComps/hero/hero';
import Main from './subComps/main/main';
import Interest from './subComps/interest/interest';

const about = () => {
    return (
        <div>
            <Hero/>
            <Main/>
            <Interest/>
        </div>
    )
}

export default about;