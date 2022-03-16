/* eslint-disable */
import { useContext } from 'react';
import { appStore } from '../state/app';

const useAllowContract = () => {
  const { state } = useContext(appStore);
  const { account } = state;

  const contractArr = ['anthonypacheco.near', 'fast29.near', 'brik.near', 'savagemain.near', 'ec7796dbc37ed1e4dd8d931fee60e85a1dc1b3631f4a4fb79e2615a7cc75862a', 'mikeuponly.near', 'stuckinape.near', 'novask.near', 'goodvibezonly.near', 'fukuharabz.near', 'jerryrice.near', 'jaylomakin.near', 'vermz.near', 'juanmata.near', 'ravimonke.near', 'cryptoflea.near', 'howl33333.near', 'kazerin_vault.near', 'kenshinvii.near', 'nakameowdough.near', 'zamax.near', 'zeusabdiyuwono.near', 'korodonat.near', 'mintburner.near', 'drcryptog.near', 'thavers.near', 'hyypey.near', 'eliag.near', 'dust2dust.near', '7ac.near','sirs.near', 'zard.near',  'imrj.near', 'brigadier.near', 'iblisx.near', 'sfokrypto.near', 'coolaaron.near', 'foodtester.near', 'gunter.near', 'daff4495c8802c20c11511ab08c5d3637fb5f352235ff7ff986b1435b181419e', 'boleh.near', 'bacb48442342d1f7ba56065ae1d220c65d67947d56c36a5c4df5183653f11cfa', 'rockyyy.near', 'nearbigbraind.near', 'spiderpig92.near', 'thisiscrypto.near', 'diamondzz.near', 'hoizhagga.near', 'crxss.near', 'keiss.near', 'thecryptoasian.near', 'lavacake.near', 'spadre.near', 'jellyyy.near', 'beef13.near', 'nextp.near', 'nearnftsquad.near', 'misfires.near', 'tusharvault.near', 'ltlollipop.near', '3x5kfabc.near', '7ac.near', 'markoeth.near', 'rmml.near', 'aureta.near', 'rejinderi.near', 't1les.near', 'rogan.near', 'lp771.near', 'kdot.near', 'murkdawork.near', 'yuensid.near', 'ishergodx.near', 'lalo.near', 'peachynft.near', 'macca028.near', 'jehoti.near', 'griffingroggs.near', 'arlenjim.near', 'bucketsfi.near', 'easkey.near', 'supah.near', '2b8933c14ef11fb1b8bef287b576b3ae2fc0ec31096f27818d2360a8b19d1723', 'e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01', 'neilrankin.near', 'goudvis.near', 'azzip.near', 'mara-vault.near'];
  let contactAllow = contractArr.includes(account?.accountId);

  return { contactAllow };
};

export default useAllowContract;
