import firebase from 'firebase';
import { providerGoogle } from 'index';
import { useState, useEffect } from 'react';

const useGoogleLogin = () => {
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    firebase.auth().getRedirectResult().then(function(result) {
      // setIsLoading(true);
  
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential;
        console.debug(result)
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      // setIsLoading(false);
      setUser(user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }, [])

  const loginWithGoogle = async () => {
    firebase.auth().signInWithRedirect(providerGoogle);
  };

  return {
    loginWithGoogle,
    user,
    isLoading,
  };
};

export default useGoogleLogin;
