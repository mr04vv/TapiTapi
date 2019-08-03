import firebase from 'firebase';
import { providerGoogle } from 'index';

const useGoogleLogin = () => {
  const loginWithGoogle = () => {
    firebase.auth().signInWithRedirect(providerGoogle);
    firebase.auth().getRedirectResult().then((result: any) => {
      console.log(result);
      // TODO: ex. storeに送信, DB保存,...
    }).catch((error: Error) => {
      console.log(error);
    });
  };

  return loginWithGoogle;
};

export default useGoogleLogin;
