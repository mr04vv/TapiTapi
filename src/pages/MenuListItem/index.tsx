import * as React from 'react';
import MenuInterface, { MenuItemInterface } from 'interfaces/MenuInterface';
import CategoryInterface from 'interfaces/CategoryInterface';
import useStyles from './styles';

interface PropsInterface {
    label: string;
    menus: MenuInterface[];
    categories: CategoryInterface[];
}

const MenuListItem = ({ label, menus, categories }: PropsInterface) => {
  const classes = useStyles();

  return (
    <div className={classes.bodyWrapper}>
      <p className={classes.title}>{label}</p>
      {menus.map((menu: MenuInterface) => (
        <div className={classes.itemWrapper}>
          <p className={classes.caption}>{categories.find((c: CategoryInterface) => c.id === menu.categoryId)!.jaName}</p>
          {menu.items.map((item: MenuItemInterface) => (
            <div className={classes.menuWrapper}>
              <div>
                <p className={classes.enMenuName}>{item.enName}</p>
                <p className={classes.jaMenuName}>{item.jaName}</p>
              </div>
            </div>
          ))}
        </div>

      ))}
    </div>
  );
};

export default MenuListItem;
