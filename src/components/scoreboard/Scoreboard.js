import React from 'react';


function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div className="teamstats">
                <h3>HOME</h3>
                <h3>{props.homeTeamStats.score}</h3>
            </div>

            <h3>SCOREBOARD</h3>

            <div className="teamstats">
                <h3>VISITORS</h3>
                <h3>{props.visitingTeamStats.score}</h3>
            </div>
        </div>

    )
}

export default Scoreboard;