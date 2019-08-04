import * as React from 'react';
import useStyles from './styles';
import MenuListItem from 'pages/MenuListItem';
import MenuInterface from 'interfaces/MenuInterface';

const thumbnailUrl = require('images/menu.png');

const MenuList = () => {
  const classes = useStyles();

  const drinkMenuList: MenuInterface[] = [
    {
      id: 1, enName: 'Original', jaName: 'オリジナル', price: '¥300円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
    {
      id: 2, enName: 'Original', jaName: 'オリジナル', price: '¥300円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
    {
      id: 3, enName: 'Original', jaName: 'オリジナル', price: '¥300円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
    {
      id: 4, enName: 'Original', jaName: 'オリジナル', price: '¥300円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
    {
      id: 5, enName: 'Original', jaName: 'オリジナル', price: '¥300円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
  ];

  const foodMenuList: MenuInterface[] = [
    {
      id: 1, enName: 'Cake', jaName: 'ソウ', price: '¥150円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
    {
      id: 2, enName: 'Egg Tart', jaName: 'エッグタルト', price: '¥250円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
    {
      id: 3, enName: 'Pudding', jaName: 'プリン', price: '¥250円〜', image: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
  ];

  return (
    <div className={classes.buttonWrapper}>
      <img src={`${thumbnailUrl}`} alt="menuBackgroundImage" className={classes.thumbnailImage} />
      <div className={classes.storeName}>Gongcha東京駅店</div>
      <a href="#allergy" className={classes.allergy}>アレルギー情報はこちら</a>
      <MenuListItem
        label="ドリンク"
        menus={drinkMenuList}
      />
      <MenuListItem
        label="フード"
        menus={foodMenuList}
      />
    </div>
  );
};

export default MenuList;
