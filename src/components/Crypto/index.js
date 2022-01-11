import React from 'react';
import equilibrium from '../../assets/images/image-equilibrium.jpg';
import ethereum from '../../assets/images/icon-ethereum.svg';
import clock from '../../assets/images/icon-clock.svg';
import jules from '../../assets/images/image-avatar.png';

import './styles.scss';

export default function Crypto() {
  return (
    <div className="crypto">
      <img src={equilibrium} alt="react logo" className="crypto__img" />
      <h1 className="crypto__title">Equilibrium #3429</h1>
      <p className="crypto__desc">Our Equilibrium collection promotes balance and calm.</p>

        <div className="crypto__icons">
          <div className="crypto__icons__ethereum">
            <img src={ethereum} alt="ethereum" className="crypto__icons__ethereum__image" />
            <h2 className="crypto__icons__ethereum__money">0.041 ETH</h2>
          </div>
          <div className="crypto__icons__time">
            <img src={clock} alt="ethereum" className="crypto__icons__time__clock" />
            <h2 className="crypto__icons__time__oclock">3 days left</h2>
          </div>
        </div>

        <div className="crypto__author">
          <img src={jules} alt="jules" className="crypto__author__image" />
          <h2 className="crypto__author__name">Creation of <span className="crypto__author__name__span">Jules Wyvern</span></h2>
        </div>
    </div>
  );
}
