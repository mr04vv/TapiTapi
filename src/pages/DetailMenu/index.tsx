import * as React from 'react';
import Button from '@material-ui/core/Button';
import useScrollTop from 'hooks/ScrollTop/useScrollTop';
import useMenuDetail from 'hooks/Menu/useMenuDetail';
import useStyles from './styles';
import SelectMenu from './SelectMenu';
import RadioMenu from './RadioMenu';


const thumbnail = require('images/img_ad1aa8fefac6d770b0441fefbfceb61b917960.jpg');

const DetailMenu = () => {
  const classes = useStyles();
  const menu = useMenuDetail();
  useScrollTop();
  return (
    <div className={classes.body}>
      <img src={`${thumbnail}`} alt="" className={classes.thumbnail} />

      {menu.item
      && (
      <div className={classes.titleWrapper}>
        <div className={classes.titleLetter}>{menu.item.enName}</div>
        <div className={classes.subTitleLetter}>{menu.item.jaName}</div>
      </div>
      )
      }

      <RadioMenu items={menu.tempList} label="ICED/HOT" isRow value={menu.selectedTemp} handleChange={menu.setTemp} disabled={menu.selectedSize === 'L' || menu.isOnlyIced} />
      {!menu.isOnlyIced && menu.selectedSize === 'L' && <p className={classes.sizeAttension}>LサイズはICEDのみです</p>}
      {menu.isOnlyIced
        && <p className={classes.selectableAttension}>この商品はICED飲みの販売です</p>
      }
      <RadioMenu items={menu.sizeList} label="サイズ" isRow value={menu.selectedSize} handleChange={menu.setSize} disabled={!menu.sizeSelectable} price={menu.item && menu.item!.price} />
      {!menu.sizeSelectable
        && <p className={classes.selectableAttension}>この商品はMサイズのみの販売です</p>
      }
      <RadioMenu items={menu.sweetList} label="甘さ" isRow value={menu.selectedSweetness} handleChange={menu.setSweet} />
      <RadioMenu items={menu.iceList} label="氷の量" isRow value={menu.selectedIce} handleChange={menu.setIce} />
      {/* <RadioMenu items={menu.toppingList} label="トッピング（最大３つまで）" value={menu.selectedToppings} /> */}

      <SelectMenu label="個数" items={[1, 2, 3]} />

      <Button variant="contained">注文内容を確認する</Button>

    </div>
  );
};

export default DetailMenu;
