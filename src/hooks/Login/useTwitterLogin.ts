import firebase from 'firebase';
import { providerTwitter } from 'index';

const useTwitterLogin = () => {
  const loginWithTwitter = () => {
    firebase.auth().signInWithRedirect(providerTwitter);
    firebase.auth().getRedirectResult().then((result: any) => {
      console.log(result);
      // TODO: ex. storeに送信, DB保存,...
    }).catch((error: Error) => {
      console.log(error);
    });
  };

  return loginWithTwitter;
};

export default useTwitterLogin;
