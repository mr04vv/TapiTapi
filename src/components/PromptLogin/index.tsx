/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Button } from '@material-ui/core';
import useTwitterLogin from 'hooks/Login/useTwitterLogin';
import useGoogleLogin from 'hooks/Login/useGoogleLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
// sampleで入れてます
import useReactRouter from 'use-react-router';
import useStyles from './styles';

const PromptLogin = () => {
  const classes = useStyles();
  // const twitterLogin = useTwitterLogin();
  // const googleLogin = useGoogleLogin();
  const { history } = useReactRouter();
  return (
    <div className={classes.buttonWrapper}>
      <p className={classes.p}>この機能を使用するにはログインが必要です</p>
      {/* <Button aria-label="Delete" className={classes.loginButton} onClick={() => twitterLogin()}> */}
      <Button aria-label="Delete" className={classes.loginButton} onClick={() => history.push({ pathname: 'confirm' })}>
        <FontAwesomeIcon icon={faTwitter} size="lg" className={classes.twitterIcon} />
        Twitterでログイン
      </Button>
      {/* <Button aria-label="Delete" className={classes.loginButton} onClick={() => googleLogin.loginWithGoogle()}> */}
      <Button aria-label="Delete" className={classes.loginButton} onClick={() => history.push({ pathname: 'detail' })}>
        <FontAwesomeIcon icon={faGoogle} size="lg" className={classes.twitterIcon} />
        Googleでログイン
      </Button>
    </div>
  );
};

export default PromptLogin;
