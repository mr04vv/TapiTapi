import * as React from 'react';
import useReactRouter from 'use-react-router';
import useStyles from './styles';

const PaymentComplete = () => {
  const classes = useStyles();
  const { match } = useReactRouter();
  const { params }: any = match;

  return (
    <div className={classes.contentWrapper}>
      <p className={classes.headerText}>決済が完了しました</p>
      <p className={classes.orderNumber}>{params.orderId}</p>
      <p className={classes.footerText}>こちらの番号が呼ばれるまで、しばらくお待ち下さい。</p>
    </div>
  );
};

export default PaymentComplete;
