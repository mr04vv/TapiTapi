import * as React from 'react';
import MenuInterface from 'interfaces/MenuInterface';
import useStyles from './styles';

interface PropsInterface {
    label: string,
    menus: MenuInterface[],
}

const MenuListItem = ({ label, menus }: PropsInterface) => {
  const classes = useStyles();

  return (
    <div className={classes.bodyWrapper}>
      <h1 className={classes.caption}>{label}</h1>
      {menus.map((menu: MenuInterface) => (
        <div className={classes.menuWrapper}>
          <div>
            <p className={classes.enMenuName}>{menu.enName}</p>
            <p className={classes.jaMenuName}>{menu.jaName}</p>
            <p className={classes.price}>{menu.price}</p>
          </div>
          <img src={menu.image} alt="menuImage" className={classes.menuImage} />
        </div>
      ))}
    </div>
  );
};

export default MenuListItem;
