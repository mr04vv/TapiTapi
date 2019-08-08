import * as React from 'react';
import QrReader from 'react-qr-reader';
import useQrReader from 'hooks/QrReader/useQrReader';
import ArrowForward from '@material-ui/icons/ArrowForward';
import useStyles from './styles';


const QrCodeReader = () => {
  const classes = useStyles();
  const reader = useQrReader();
  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <QrReader
          delay={300}
          onError={reader.readError}
          onScan={reader.fetchItemInfo}

          style={{ width: '100%', transfome: 'scale(1, -1)' }}
          facingMode="user"
        />
        <div className={classes.error}>{reader.isStoreError && '店舗が違います'}</div>
        <div className={classes.error}>{reader.isError && '読み取りに失敗しました'}</div>
        <div className={classes.loading}>{reader.isLoading && '読み取り中'}</div>
      </div>
      <p className={classes.camText}>
        ここにかざしてください
        <ArrowForward style={{ fontSize: '30px' }} />
      </p>
    </div>
  );
};

export default QrCodeReader;