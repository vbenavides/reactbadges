import React from 'react';

import logo from '../images/platziconf-logo.svg';
import astronautas from '../images/astronauts.svg';
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home__container">
        <div className="home__start">
          <img className="home__logo" src={logo} alt="Logo de la conferencia"/>
          <h2>PRINT YOUR BADGES</h2>
          <p>The easiest way to manage your conference</p>
          <button>Start now</button>
        </div>
        <img className="home__img-container" src={astronautas} alt="Astronautas"/>
      </div>
    )
  }
}

export default Home;