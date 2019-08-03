import firebase from 'firebase';
import { providerTwitter } from 'index';

const useTwitterLogin = () => {
  const loginWithTwitter = () => {
    firebase.auth().signInWithRedirect(providerTwitter);
    firebase.auth().getRedirectResult().then((result: any) => {
      // eslint-disable-next-line no-console
      console.log(result);
      // TODO: ex. storeに送信, DB保存,...
    }).catch((error: Error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  };

  return loginWithTwitter;
};

export default useTwitterLogin;
