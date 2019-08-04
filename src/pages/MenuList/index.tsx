import * as React from 'react';
import useStyles from './styles';


const MenuList = () => {
  const classes = useStyles();
  // eslint-disable-next-line global-require
  const thumbnailUrl = require('images/menu.png');

  const drinkMenuList = [
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

  const foodMenuList = [
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
      <a href="#" className={classes.allergy}>アレルギー情報はこちら</a>

      <div className={classes.bodyWrapper}>
        <h1 className={classes.caption}>ドリンク</h1>
        {drinkMenuList.map(drinkMenu => (
          <div className={classes.menuWrapper}>
            <div>
              <p className={classes.enMenuName}>{drinkMenu.enName}</p>
              <p className={classes.jaMenuName}>{drinkMenu.jaName}</p>
              <p className={classes.price}>{drinkMenu.price}</p>
            </div>
            <img src={drinkMenu.image} alt="menuImage" className={classes.menuImage} />
          </div>
        ))}
      </div>

      <div className={classes.bodyWrapper}>
        <h1 className={classes.caption}>フード</h1>
        {foodMenuList.map(drinkMenu => (
          <div className={classes.menuWrapper}>
            <div>
              <p className={classes.enMenuName}>{drinkMenu.enName}</p>
              <p className={classes.jaMenuName}>{drinkMenu.jaName}</p>
              <p className={classes.price}>{drinkMenu.price}</p>
            </div>
            <img src={drinkMenu.image} alt="menuImage" className={classes.menuImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
