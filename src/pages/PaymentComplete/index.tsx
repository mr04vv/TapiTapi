import * as React from 'react';
import useStyles from './styles';

const PaymentComplete = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentWrapper}>
      <p className={classes.headerText}>決済が完了しました</p>
      <p className={classes.orderNumber}>404</p>
      <p className={classes.footerText}>こちらの番号が呼ばれるまで、しばらくお待ち下さい。</p>
    </div>
  );
};

export default PaymentComplete;
