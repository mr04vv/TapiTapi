import * as React from 'react';
import { Fab } from '@material-ui/core';
import useTwitterLogin from 'hooks/Login/useTwitterLogin';
import useGoogleLogin from 'hooks/Login/useGoogleLogin';
import useStyles from './styles';

const googleIcon = require('images/icons8-google-48.png');

const Home = () => {
  const classes = useStyles();
  const twitterLogin = useTwitterLogin();
  const googleLogin = useGoogleLogin();

  return (
    <div className={classes.buttonWrapper}>
      <Fab aria-label="Delete" className={classes.twitterLoginButton} onClick={() => twitterLogin()}>
        <i className={['fab fa-twitter fa-lg', classes.twitterIcon].join(' ')} />
        Twitterでログイン
      </Fab>
      <Fab aria-label="Delete" className={classes.googleLoginButton} onClick={() => googleLogin()}>
        <img src={`${googleIcon}`} alt="googleIcon" className={['fab fa-google fa-lg', classes.googleIcon].join(' ')} />
        Googleでログイン
      </Fab>
    </div>
  );
};

export default Home;