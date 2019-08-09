import * as React from 'react';
import MenuListItem from 'pages/MenuListItem';
import MenuInterface from 'interfaces/MenuInterface';
import useScrollTop from 'hooks/ScrollTop/useScrollTop';
import useMenuList from 'hooks/Menu/useMenuList';
import StoreInterface from 'interfaces/StoreInterface';
import CategoryInterface from 'interfaces/CategoryInterface';
import ProgressCircle from 'components/ProgressCircle';
import useStyles from './styles';

const thumbnailUrl = require('images/035ce9ee5f2f4efa3b5c243bf24d2b9c_s.jpg');

interface InfoInterface {
  isLoading: boolean;
  store: StoreInterface | undefined;
  drinkList: MenuInterface[];
  foodList: MenuInterface[];
  drinkCategoryList: CategoryInterface[];
  foodCategoryList: CategoryInterface[];
}

const MenuList = () => {
  const classes = useStyles();
  const info: InfoInterface = useMenuList();
  useScrollTop();

  return (
    <div className={classes.buttonWrapper}>
      <img src={`${thumbnailUrl}`} alt="menuBackgroundImage" className={classes.thumbnailImage} />
      <div className={classes.title}>メニューを選択する</div>
      <p className={classes.storeName}>{info.store && info.store.storeName}</p>

      <a href="#allergy" className={classes.allergy}>アレルギー情報はこちら</a>
      {info.isLoading ? <ProgressCircle size="20px" relative />
        : (
          <React.Fragment>
            {!info.store ? <p className={classes.storeName}>店舗が見つかりませんでした</p>
              : (
                <React.Fragment>
                  {info.drinkList.length > 0 && info.drinkCategoryList.length > 0 && (
                  <MenuListItem
                    label="Drinks"
                    categories={info.drinkCategoryList}
                    menus={info.drinkList}
                    storeId={info.store!.id}
                  />
                  )}
                  {info.foodList.length > 0 && info.foodCategoryList.length > 0 && (
                  <MenuListItem
                    label="Foods"
                    categories={info.foodCategoryList}
                    menus={info.foodList}
                    storeId={info.store!.id}
                  />
                  )}
                </React.Fragment>
              )
      }
          </React.Fragment>
        )
      }

    </div>
  );
};

export default MenuList;
