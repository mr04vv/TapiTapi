import * as React from 'react';
import QRCode from 'qrcode.react';
import useOrderedItem from 'hooks/Menu/useOrderedItem';
import useStyles from './styles';

const OrderComplete = () => {
  const classes = useStyles();
  const itemInfo = useOrderedItem();

  return (
    <div className={classes.contentWrapper}>
      <p className={classes.headerText}>
        ご注文いただき
        <br />
        ありがとうございます
      </p>
      {itemInfo.infoId && <div className={classes.barcode}><QRCode value={itemInfo.infoId} /></div>}
      <p className={classes.footerText}>順番がきましたらレジにてこちらのバーコードをおみせください。</p>
    </div>
  );
};

export default OrderComplete;
