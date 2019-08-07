import * as React from 'react';
import MenuInterface, { MenuItemInterface } from 'interfaces/MenuInterface';
import CategoryInterface from 'interfaces/CategoryInterface';
import useStyles from './styles';

interface PropsInterface {
    label: string;
    menus: MenuInterface[];
    categories: CategoryInterface[];
    storeId: number;
}

const MenuListItem = ({
  label, menus, categories, storeId,
}: PropsInterface) => {
  const classes = useStyles();

  return (
    <div className={classes.bodyWrapper}>
      <p className={classes.title}>{label}</p>
      {menus.map((menu: MenuInterface) => (
        (label === 'Drinks' || !categories.find((c: CategoryInterface) => c.id === menu.categoryId)!.storeIds || categories.find((c: CategoryInterface) => c.id === menu.categoryId)!.storeIds!.includes(storeId))
        && (
        <div key={label + menu.categoryId} className={classes.itemWrapper}>
          <p className={classes.caption}>{categories.find((c: CategoryInterface) => c.id === menu.categoryId)!.enName}</p>
          {menu.items.map((item: MenuItemInterface) => (
            <div key={item.id} className={classes.menuWrapper}>
              <div>
                <p className={classes.enMenuName}>{item.enName}</p>
                <p className={classes.jaMenuName}>{item.jaName}</p>
                {label === 'Drinks' && <p className={classes.price}>{`¥${item.price.S || item.price.M}~`}</p>}
                {label === 'Foods' && <p className={classes.price}>{`¥${item.price['１個']}~`}</p>}
              </div>
              <img src="https://www.fashion-press.net/img/news/45290/LJc.jpg" alt="menuImage" className={classes.menuImage} />
            </div>
          ))}
        </div>
        )

      ))}
    </div>
  );
};

export default MenuListItem;
