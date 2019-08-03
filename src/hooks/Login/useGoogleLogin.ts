/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import firebase from 'firebase';
import { providerGoogle } from 'index';
import { useState, useEffect } from 'react';

const useGoogleLogin = () => {
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    firebase.auth().getRedirectResult().then((result) => {
      // setIsLoading(true);
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential;
        console.debug(result);
        // ...
      }
      // The signed-in user info.
      const { user } = result;
      // setIsLoading(false);
      setUser(user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
      // ...
    });
  }, []);

  const loginWithGoogle = async () => {
    firebase.auth().signInWithRedirect(providerGoogle);
  };

  return {
    loginWithGoogle,
    user,
    isLoading,
    setIsLoading,
  };
};

export default useGoogleLogin;
