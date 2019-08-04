import * as React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

import RadioMenuItem from './RadioMenuItem';
import SelectMenuItem from './SelectMenuItem';


const thumbnail = require('images/img_ad1aa8fefac6d770b0441fefbfceb61b917960.jpg');

const DetailMenu = () => {
  const classes = useStyles();

  return (
    <div>
      <img style={{ height: '160px' }} src={`${thumbnail}`} alt="" />

      <div className={classes.menuArea}>
        <div className={classes.menuTitleArea}>
          <div className={classes.titleLetter}>Gong cha Spetial</div>
          <div className={classes.subTitleLetter}>ゴンチャ スペシャル</div>
        </div>

        <div className={classes.baseTeaArea}>
          <div className={classes.titleLetter}>ベースティー</div>
          <RadioGroup aria-label="gender" name="gender1">

            <RadioMenuItem />
            <RadioMenuItem />
            <RadioMenuItem />
            <RadioMenuItem />

          </RadioGroup>

        </div>

        <div className={classes.selectArea}>
          <div>
            <div style={{ display: 'inline-block', width: '141px' }}>
              <div className={classes.titleLetter}>ICE/HOT</div>
              <SelectMenuItem />
            </div>
            <div style={{ display: 'inline-block', width: '141px' }}>
              <div className={classes.titleLetter}>サイズ</div>
              <SelectMenuItem />
            </div>
          </div>

          <div>
            <div style={{ display: 'inline-block', width: '141px' }}>
              <div className={classes.titleLetter}>甘さ</div>
              <SelectMenuItem />
            </div>
            <div style={{ display: 'inline-block', width: '141px' }}>
              <div className={classes.titleLetter}>氷の量</div>
              <SelectMenuItem />
            </div>
          </div>
        </div>

        <div className={classes.toppingArea}>
          <div className={classes.titleLetter}>トッピング（最大３つまで）</div>
          <RadioGroup aria-label="gender" name="gender1">
            <RadioMenuItem />
            <RadioMenuItem />
            <RadioMenuItem />
            <RadioMenuItem />
            <RadioMenuItem />
            <RadioMenuItem />
          </RadioGroup>

        </div>

        <div className={classes.numArea}>
          <div className={classes.titleLetter}>個数</div>
          <SelectMenuItem />
        </div>

      </div>

      <div className={classes.buttonArea}>

        <Button variant="contained">注文内容を確認する</Button>

      </div>

    </div>
  );
};

export default DetailMenu;
