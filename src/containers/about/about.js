import React from 'react';

import Hero from './subComps/hero/hero';
import Main from './subComps/main/main';
import Interest from './subComps/interest/interest';
import Video from './subComps/video/video';

const about = () => {
    return (
        <div>
            <Hero/>
            <Main/>
            <Interest/>
            <Video/>
        </div>
    )
}

export default about;