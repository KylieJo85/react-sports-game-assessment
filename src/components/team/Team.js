import React from 'react';


function Team(props) {

    let shotPercentageDiv
    let shotPercentage = 0
    if (props.stats.shots) {

        shotPercentage = (Math.round(props.stats.score / props.stats.shots * 100))
    }
    shotPercentageDiv = (
        <div>
            <strong>Shooting %:{shotPercentage}</strong>
        </div>
    )
    return (
        <div className="Team">
            <h2>{props.name}</h2>

            <div className="Picture">
                <img src={props.logo} alt={props.name} />
                <div>
                    <strong>Shots:</strong> {props.stats.shots}
                </div>
                <div>
                    <strong>Score:{shotPercentage}</strong> {props.stats.score}
                </div>
                {shotPercentageDiv}
                <button onClick={props.shotHandler}>Shoot!</button>

            </div>

        </div>
    )
}

export default Team;