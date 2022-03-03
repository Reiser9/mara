/* eslint-disable */
import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
import useBuy from '../../hooks/useBuy';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const { oneNFT } = state.price;

  const { formatPrice } = useBuy();

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">How much?</h2>
          <p className="generate__text">
            Billionaire Bulls are priced at a flat rate of 7 NEAR.
          </p>

          <h2 className="generate__title">About</h2>

          <p className="generate__text">
            Entering Billionaire Bulls Club means you are bullish on entire NEAR protocol, so by owning NFT token you can get access to our investment DAO community and invest in unique and exclusive upcoming projects on NEAR.
          </p>
          
          <h2 className="generate__title">All benefits of investing in NEAR with US:</h2>

          <p className="generate__text">
            More diversification - more upside
            -As a DAO, we act like active manager, taking care of time-consuming tasks such as due diligence and deploying funds across multiple projects
            -Community Access
            All accelerator graduates have the option of offering to our community whitelisted pre-sale access to their projects.
          </p>

          <h2 className="generate__title">What Is The RED Series?</h2>

          <p className="generate__text">
            The NFT community inspires us everyday. We highly appreciate support from each of you and to prove our intention we proud to announce RED Bull series.
            You will have a chance (1 per 300 minted bills) to mint a unique Bull which will be guaranteed bought from you on secondary market for 10x to the mint price.
          </p>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}

          <picture>
            <source srcSet="./images/hero2.jpg" />
            <img
              className={`generate__img ${
                soldOut ? 'generate__img-sold-out' : ''
              }`}
              src="./images/hero2.jpg"
              alt="generate misfits"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Generate;
