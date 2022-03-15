/* eslint-disable */
import React, { useContext, memo } from 'react';
import { appStore } from '../../state/app';
import SocialLinks from '../../components/SocialLinks';
import ConnectWalletBtn from '../../components/ConnectWalletBtn';
import Loader from '../../components/Loader/Loader';

const Header = () => {
  const { state } = useContext(appStore);
  const { wallet, account } = state;

  if (!wallet) {
    return <Loader />;
  }

  return (
    <header className="header">
      <a href="https://paras.id/mara_nft.near/collections" className="header__title">
        Marketplace
      </a>

      <img src="./images/x.svg" alt="x" />

      <div className="header__wrapper">
        <SocialLinks className="header__social" />
        {account?.accountId ? (
          <ConnectWalletBtn
            text={account.accountId}
            handleClick={() => wallet.signOut()}
          />
        ) : (
          <ConnectWalletBtn handleClick={() => wallet.signIn()} />
        )}
      </div>
    </header>
  );
};

export default memo(Header);
