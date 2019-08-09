import * as React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useStyles from './styles';

const PromptLogin = ({ login }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonWrapper}>
      {!login.isLoading
          && (
          <React.Fragment>
            <p className={classes.p}>この機能を使用するにはログインが必要です</p>
            <Button aria-label="Delete" className={classes.loginButton} onClick={() => login.loginWithTwitter()}>
              <FontAwesomeIcon icon={faTwitter} size="lg" className={classes.twitterIcon} />
              Twitterでログイン
            </Button>
            <Button aria-label="Delete" className={classes.loginButton} onClick={() => login.loginWithGoogle()}>
              <FontAwesomeIcon icon={faGoogle} size="lg" className={classes.twitterIcon} />
              Googleでログイン
            </Button>
          </React.Fragment>
          )
      }
    </div>
  );
};

export default PromptLogin;
