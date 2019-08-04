import * as React from 'react';
import useStyles from './styles';

const OrderComplete = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentWrapper}>
      <p className={classes.text1}>
        ご注文いただき、
        <br />
        ありがとうございます
      </p>
      <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/j/johnnadams/20180620/20180620095225.png" alt="barcode" className={classes.barcode} />
      <p className={classes.text2}>順番がきましたらレジにてこちらのバーコードをおみせください。</p>
    </div>
  );
};

export default OrderComplete;
