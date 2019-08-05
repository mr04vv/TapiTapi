import * as React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import SelectMenu from './SelectMenu';
import RadioMenu from './RadioMenu';


const thumbnail = require('images/img_ad1aa8fefac6d770b0441fefbfceb61b917960.jpg');

const DetailMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <img src={`${thumbnail}`} alt="" className={classes.thumbnail} />

      <div className={classes.titleWrapper}>
        <div className={classes.titleLetter}>Gong cha Spetial</div>
        <div className={classes.subTitleLetter}>ゴンチャ スペシャル</div>
      </div>

      <RadioMenu items={[1, 2, 3]} label="ベースティー" />
      <RadioMenu items={['ICE', 'HOT']} label="ICE/HOT" isRow />
      <RadioMenu items={['S', 'M', 'L']} label="サイズ" isRow />
      <RadioMenu items={[1, 2, 3]} label="甘さ" />
      <RadioMenu items={[1, 2, 3]} label="氷の量" />
      <RadioMenu items={[1, 2, 3]} label="トッピング（最大３つまで）" />

      <SelectMenu label="個数" items={[1, 2, 3]} />

      <Button variant="contained">注文内容を確認する</Button>

    </div>
  );
};

export default DetailMenu;
