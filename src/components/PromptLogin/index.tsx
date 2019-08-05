import * as React from 'react';
import { Fab, Button } from '@material-ui/core';
import useTwitterLogin from 'hooks/Login/useTwitterLogin';
import useGoogleLogin from 'hooks/Login/useGoogleLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useStyles from './styles';

const PromptLogin = () => {
  const classes = useStyles();
  const twitterLogin = useTwitterLogin();
  const googleLogin = useGoogleLogin();
  return (
    <div className={classes.buttonWrapper}>
      <p className={classes.p}>この機能を使用するにはログインが必要です</p>
      <Button aria-label="Delete" className={classes.loginButton} onClick={() => twitterLogin()}>
        <FontAwesomeIcon icon={faTwitter} size="lg" className={classes.twitterIcon} />
        Twitterでログイン
      </Button>
      <Button aria-label="Delete" className={classes.loginButton} onClick={() => googleLogin.loginWithGoogle()}>
        <FontAwesomeIcon icon={faGoogle} size="lg" className={classes.twitterIcon} />
        Googleでログイン
      </Button>
    </div>
  );
};

export default PromptLogin;
