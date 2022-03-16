/* eslint-disable */
import React, {useContext} from 'react';
import CalendarBtn from './CalendarBtn';
import { appStore } from '../../state/app';

const Hero = () => {
  const { state } = useContext(appStore);
  const token = state.app;

  return (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__information">
        <div className="hero__information--wrapper">
          <div className="hero__wrapper--content">
            <div className="hero__item">
              <p className="hero__item--title">Total minted</p>

              <p className="hero__item--text">{token.nftTotalSupply} / 1,000</p>
            </div>

            <div className="hero__item">
              <p className="hero__item--title">Price</p>

              <p className="hero__item--text">
                15
                <img className="hero__item--icon" src="./images/n.svg" alt="Icon" />
              </p>
            </div>
          </div>

          <p className="hero__text">16/03/2022</p>
          <h1 className="hero__title">
            <span className="hero__title--italic">Discover</span> The collection of <span className="hero__title--italic">MAra.nft</span>
          </h1>
          <p className="hero__text--point">
            A collection of 1000 unique, randomly generated NFT’s sorted on the NEAR blockchain
          </p>
          <div className="hero__wrapper">
            <CalendarBtn className="hero__calendar-btn" />
          </div>
          {/*<p className="hero__item--text">
            Tokens left: {token.nftTotalSupply}/{token.tokensLeft}
          </p>*/}
        </div>

        <picture className="hero__picture">
          <source srcSet="./images/hero2.jpg" />
          <img
            className="hero__image"
            src="./images/hero2.jpg"
            alt="hello super"
          />
        </picture>
      </div>
    </div>
  </div>
)};

export default Hero;