//Thank you to flickr.com for the use of the basketball pumpkin head image and to
// http://teamlogostyle.com/product/mummy-basketball-clip-art/ for the use of the mummy basketball image in this
// project. For medium mode I'd like to thank
// http://dreamstime.com/stock-photo-funny-halloween-sports-basketball-pumpkin-image16749460// for the use of the
// skeleton holding pumpkin image and to https://www.canstockphoto.com/zombie-basketball-64292318.html for the zombie
// image.
// Also, Thank you to https://www.freesoundeffects.com/ for the use of the heartbeat and squish sounds for the shots
// and goals counter.
// Special thank you to Davy Strus for the example videos and all who contributed to the starter code repos.//
// Additional thank you to Colin and Jon for helping me with importing my audio and images into this project.


import React from 'react';
import './App.css';
import Skeleton from './assets/images/Slam dunkin skeleton.jpg'
import Pumpkin from './assets/images/pumpkin head basketball.jpg'
import Mummy from './assets/images/Mummy holding basketball.jpg'
import Zombie from './assets/images/Zombie basketball.jpg'
import Game from './components/game/Game'



function App(props) {
  const pumpkin = {
    name: "Pumpkin Heads",
    logoSrc: Pumpkin
  }

  const mummy = {
    name: "Mummy Maverics",
    logoSrc: Mummy
  }

  const skeleton = {
    name: "Slam Dunkin Skeletons",
    logoSrc: Skeleton
  }

  const zombie = {
    name: "Zombie Brainiacs",
    logoSrc: Zombie
  }

  return (
    <div className="App">
      <Game venue="Transylvania Castle Arena"
        homeTeam={pumpkin}
        visitingTeam={mummy} />
      <Game venue="Blue Lagoon Swamp Complex"
        homeTeam={skeleton}
        visitingTeam={zombie} />


    </div>
  )






}


export default App;

