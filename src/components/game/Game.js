import React from 'react';
import Team from '../team/Team';
import Scoreboard from '../scoreboard/Scoreboard';
import shotSound from '../../assets/audio/heartbeat.wav';
import scoreSound from '../../assets/audio/SQUISH11.wav';


class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            resetCount: 0,
            homeTeamStats: {
                shots: 0,
                score: 0
            },
            visitingTeamStats: {
                shots: 0,
                score: 0
            }
        }

        this.shotSound = new Audio(shotSound)
        this.scoreSound = new Audio(scoreSound)

    }

    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let score = this.state[teamStatsKey].score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1
            setTimeout(() => {

                this.scoreSound.play()
            }, 100)
        }
        this.setState((state, props) => ({
            [teamStatsKey]: {
                shots: state[teamStatsKey].shots + 1,
                score
            }
        }))
    }


    resetGame = () => {
        this.setState((state, props) => ({

            resetCount: state.resetCount + 1,

            homeTeamStats: {

                shots: 0,
                score: 0

            },

            visitingTeamStats: {

                shots: 0,
                score: 0

            }

        }))
    }

    render() {
        return (
            <div className="Game">
            <Scoreboard
            homeTeamStats={this.state.homeTeamStats}
            visitingTeamStats={this.state.visitingTeamStats}
            />

                <h1>Count Dracula Welcomes You to {this.props.venue}</h1>

                <div className="Stats">
                    <Team
                        name={this.props.homeTeam.name}
                        logo={this.props.homeTeam.logoSrc}
                        stats={this.state.homeTeamStats}
                        shotHandler={() => this.shoot('home')}
                    />

                    <div className="Verses">
                        <h1> Vs.</h1>
                        <div>
                            <strong>Resets:</strong>{this.state.resetCount}
                            <button onClick={this.resetGame}>Reset Game</button>
                        </div>
                    </div>

                    <Team
                        name={this.props.visitingTeam.name}
                        logo={this.props.visitingTeam.logoSrc}
                        stats={this.state.visitingTeamStats}
                        shotHandler={() => this.shoot('visiting')}
                    />
                </div>
            </div>
        )
    }
}

export default Game;