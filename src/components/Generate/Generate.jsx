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
