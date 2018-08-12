import React from 'react';

import classes from './video.css';

import { videoData } from '../../data';

const video = () => {
    return (
        <div className={classes.wrapper}>
            <div className="container-fluid">
                <div className={classes.container + " row"}>
                    <div className="col-12">
                        <p className="text-center">Videos I've Made</p>
                        <hr className={classes.line}/>
                    </div>
                </div>

                <div className={classes.container + " row pt-2 pt-md-5 mt-lg-3"}>

                    {videoData.map((video, index) => {
                        return <div className="col-12 col-md-6 p-0" key={index}>
                                    <div className={classes.video + " p-1"}>
                                        <iframe title={video.title} width="100%" height="100%" src={video.videoUrl} frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default video;