import * as React from 'react';
import { Fab } from '@material-ui/core';
import useTwitterLogin from 'hooks/Login/useTwitterLogin';
import useGoogleLogin from 'hooks/Login/useGoogleLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import useStyles from './styles';

const googleIcon = require('images/icons8-google-48.png');

const Home = () => {
  const classes = useStyles();
  const twitterLogin = useTwitterLogin();
  const googleLogin = useGoogleLogin();
  return (
    <div className={classes.buttonWrapper}>
      <Fab aria-label="Delete" className={classes.twitterLoginButton} onClick={() => twitterLogin()}>
        {/* <FontAwesomeIcon icon={['fab', 'twitter-f']} /> */}
        <FontAwesomeIcon icon={faTwitter} size="lg" className={classes.twitterIcon} />

        {/* <i className={['fab fa-twitter fa-lg', classes.twitterIcon].join(' ')} /> */}
        Twitterでログイン
      </Fab>
      {!googleLogin.isLoading
      && (
      <Fab aria-label="Delete" className={classes.googleLoginButton} onClick={() => googleLogin.loginWithGoogle()}>
        <img src={`${googleIcon}`} alt="googleIcon" className={['fab fa-google fa-lg', classes.googleIcon].join(' ')} />
        Googleでログイン
      </Fab>
      )
      }
    </div>
  );
};

export default Home;
// 