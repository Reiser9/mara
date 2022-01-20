/* eslint-disable */
import React from 'react';
import CalendarBtn from './CalendarBtn';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__information">
        <div className="hero__wrapper--content">
          <div className="hero__item">
            <p className="hero__item--title">Total amount</p>

            <p className="hero__item--text">3,333</p>
          </div>

          <div className="hero__item">
            <p className="hero__item--title">Price</p>

            <p className="hero__item--text">5 Ⓝ</p>
          </div>
        </div>

        <p className="hero__text">18/12/2021 @ 15:00 UTC</p>
        <h1 className="hero__title">
          Antisocial Ape <br /> Club
        </h1>
        <p className="hero__text--point">
          A collection of 3333 unique, randomly generated pixel art ape NFTs stored on the NEAR blockchain.
        </p>
        <p className="hero__text--select">
        Select the amount of Antisocial Apes you you&apos;d like to mint and click the «Mint».</p>
        <div className="hero__wrapper">
          <CalendarBtn className="hero__calendar-btn" />
        </div>

        <picture>
          <source srcSet="./images/hero2.png" />
          <img
            className="hero__image"
            src="./images/hero2.png"
            alt="hello super"
          />
        </picture>
      </div>
    </div>
  </div>
);

export default Hero;