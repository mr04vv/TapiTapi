import * as React from 'react';
import MenuListItem from 'pages/MenuListItem';
import MenuInterface from 'interfaces/MenuInterface';
import useScrollTop from 'hooks/ScrollTop/useScrollTop';
import useMenuList from 'hooks/Menu/useMenuList';
import StoreInterface from 'interfaces/StoreInterface';
import CategoryInterface from 'interfaces/CategoryInterface';
import useStyles from './styles';

const thumbnailUrl = require('images/menu.png');

interface InfoInterface {
  store: StoreInterface | undefined;
  drinkList: MenuInterface[];
  foodList: MenuInterface[];
  drinkCategoryList: CategoryInterface[];
  foodCategoryList: CategoryInterface[];
}

const MenuList = () => {
  const classes = useStyles();
  const info: InfoInterface = useMenuList();
  console.debug(info);
  useScrollTop();

  return (
    <div className={classes.buttonWrapper}>
      <img src={`${thumbnailUrl}`} alt="menuBackgroundImage" className={classes.thumbnailImage} />
      <div className={classes.title}>メニューを選択する</div>
      <p className={classes.storeName}>{info.store && info.store.storeName}</p>

      <a href="#allergy" className={classes.allergy}>アレルギー情報はこちら</a>
      {info.drinkList.length > 0 && info.drinkCategoryList.length > 0 && (
        <MenuListItem
          label="ドリンク"
          categories={info.drinkCategoryList}
          menus={info.drinkList}
        />
      )}

      {/* <MenuListItem
        label="フード"
        menus={foodMenuList}
      /> */}
    </div>
  );
};

export default MenuList;
