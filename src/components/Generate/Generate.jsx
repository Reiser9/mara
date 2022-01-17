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
          <h2 className="generate__title">NEAR Tiger Academy</h2>
          <p className="generate__text">
            NTA Sale is live! Get your hands on one of the most precious generative PFP NFTs on NEAR Protocol.
          </p>
          <p className="generate__text">
          You are almost there. You have 3 steps to accomplish:
          </p>
          <p className="generate__text">
          1) Connect the wallet at the top of the page;
          </p>
          <p className="generate__text">
          2) Pick the # of NFTs: 1 or 10;
          </p>
          <p className="generate__text">
          3) Click “Generate”.
          </p>
          <p className="generate__text">
            The price for one is only 10 Ⓝ.
          </p>
          <p className="generate__text">
            Quantity limited to 2 000.
          </p>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}

          <picture>
            <source srcSet="./images/hero2.png" />
            <img
              className={`generate__img ${
                soldOut ? 'generate__img-sold-out' : ''
              }`}
              src="./images/hero2.png"
              alt="generate misfits"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Generate;
