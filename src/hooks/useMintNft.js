/* eslint-disable */
import { useContext } from 'react';
import { appStore } from '../state/app';
import useAllowContract from './useAllowContract.js';

const useMintNft = () => {
  const { state } = useContext(appStore);
  const { contract, price } = state;
  const { contactAllow } = useAllowContract();

  const mintNft = async (count = 1) => {
    const callbackUrl = `${window.location.origin}/my-nfts`;
    if (count === 1) {
      if(contactAllow){
        contract.nft_mint_one({
          args: {},
          gas: '50000000000000',
          callbackUrl,
        });
      }
      else{
        contract.nft_mint_one({
          args: {},
          gas: '50000000000000',
          amount: price.oneTokenCost,
          callbackUrl,
        });
      }
    } else {
      if(contactAllow){
        contract.nft_mint_many({
          args: { num: count },
          gas: '300000000000000',
          callbackUrl,
        });
      }
      else{
        contract.nft_mint_many({
          args: { num: count },
          gas: '300000000000000',
          amount: price.tenTokenCost,
          callbackUrl,
        });
      }
    }
  };

  return { mintNft };
};

export default useMintNft;
