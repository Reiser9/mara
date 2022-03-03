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

            <p className="hero__item--text">7 Ⓝ</p>
          </div>
        </div>

        <p className="hero__text">04/03/2022</p>
        <h1 className="hero__title">
          Billionaire Bulls Club
        </h1>
        <p className="hero__text--point">
          We are proudly introducing the collection of 3.333 unique Billionaire Bulls which give you an access to ultimate DAO features and buybacks.
        </p>
        <p className="hero__text--select">
          🎭>150 traits for PFP
        </p>
        <p className="hero__text--select">
          🏦InvestmentDAO for support early-stage projects on NEAR
        </p>
        <p className="hero__text--select">
          🔥Buybacks for 10x to mint price (simply mint a Bull with red skin and get guaranteed 10x to your mint price!)
        </p>
        <div className="hero__wrapper">
          <CalendarBtn className="hero__calendar-btn" />
        </div>

        <picture>
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
);

export default Hero;