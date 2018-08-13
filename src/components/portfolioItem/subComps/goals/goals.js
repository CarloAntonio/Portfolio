import React from 'react';

import classes from './goals.css';

const goals = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className="container">
                <h4 className="text-center py-5 text-white">Project Challenges and Goals</h4>
                <div className="accordion" id="accordionExample">

                    {props.goals.map((goal, index) => {
                        return <div className="card">
                                    <div className={classes.cardHead + " card-header"} id={"heading" + index}>
                                        <h5 className="mb-0 mx-auto">
                                            <button className={classes.button + " btn btn-link"} type="button" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                                                {goal.question}
                                            </button>
                                        </h5>
                                    </div>
                                    <div id={"collapse" + index} className="collapse" aria-labelledby={"heading" + index} data-parent="#accordionExample">
                                        <div className="card-body">
                                            {goal.answer}
                                        </div>
                                    </div>
                                </div>
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default goals;