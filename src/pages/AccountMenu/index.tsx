import * as React from 'react';
import { Button } from '@material-ui/core';
import useLogin from 'hooks/Login/useLogin';
import PromptLogin from 'components/PromptLogin';
import useCommonStyles from 'common/styles';
import useStyles from './styles';

const AccountMenu = () => {
  const classes = useStyles();
  const login = useLogin();
  const commonClasses = useCommonStyles();

  return (
    <div className={classes.buttonWrapper}>
      <h1 className={commonClasses.caption}>アカウント</h1>
      {!login.userId ? <PromptLogin login={login} />
        : (
          <Button aria-label="Delete" className={classes.loginButton} onClick={() => login.signOut()}>
        ログアウト
          </Button>
        )
    }
    </div>
  );
};

export default AccountMenu;
