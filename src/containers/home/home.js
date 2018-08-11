import React from 'react';

import Hero from './subComps/hero/hero';
import Memo from './subComps/memo/memo';
import Skills from './subComps/skills/skills';

import Aux from '../../utils/aux';

const home = () => {
    return (
        <Aux>
            <Hero/>
            <Memo/>
            <Skills/>
        </Aux>
    );
}

export default home;