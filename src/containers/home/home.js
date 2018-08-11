import React from 'react';

import Hero from './subComps/hero/hero';
import Memo from './subComps/memo/memo';

import Aux from '../../utils/aux';

const home = () => {
    return (
        <Aux>
            <Hero/>
            <Memo/>
        </Aux>
    );
}

export default home;