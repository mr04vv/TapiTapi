import * as React from 'react';
import MenuInterface, { MenuItemInterface } from 'interfaces/MenuInterface';
import CategoryInterface from 'interfaces/CategoryInterface';
import useRouter from 'use-react-router';
import useStyles from './styles';

interface PropsInterface {
    label: string;
    menus: MenuInterface[];
    categories: CategoryInterface[];
    storeId: number;
}

const teaAde = require('images/ade.png');
const milkTea = require('images/milk.png');
const juilce = require('images/ju.png');
const original = require('images/ori.png');
const pudding = require('images/pudding.png');
const smoothie = require('images/sm.png');
const so = require('images/so.png');
const talt = require('images/talt.png');
const teaTalt = require('images/teatalt.png');
const special = require('images/spe.png');

const MenuListItem = ({
  label, menus, categories, storeId,
}: PropsInterface) => {
  const classes = useStyles();
  const { history } = useRouter();

  return (
    <div className={classes.bodyWrapper}>
      <p className={classes.title}>{label}</p>
      {menus.map((menu: MenuInterface) => (
        (label === 'Drinks' || !categories.find((c: CategoryInterface) => c.id === menu.categoryId)!.storeIds || categories.find((c: CategoryInterface) => c.id === menu.categoryId)!.storeIds!.includes(storeId))
        && (
        <div key={label + menu.categoryId} className={classes.itemWrapper}>
          <p className={classes.caption}>{categories.find((c: CategoryInterface) => c.id === menu.categoryId)!.enName}</p>
          {menu.items.map((item: MenuItemInterface) => (
            <div key={item.id} className={classes.menuWrapper} onClick={() => history.push({ pathname: `/menus/${storeId}/detail`, search: `?type=${label}&categoryId=${menu.categoryId}&id=${item.id}` })} role="presentation">
              <div>
                <p className={classes.enMenuName}>{item.enName}</p>
                <p className={classes.jaMenuName}>{item.jaName}</p>
                {label === 'Drinks' && <p className={classes.price}>{`¥${item.price.S || item.price.M}~`}</p>}
                {label === 'Foods' && <p className={classes.price}>{`¥${item.price['１個']}~`}</p>}
              </div>
              {label === 'Drinks'
              && (
              <React.Fragment>
                {menu.categoryId === 1 && <img src={original} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 2 && <img src={special} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 3 && <img src={milkTea} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 4 && <img src={teaAde} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 5 && <img src={juilce} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 6 && <img src={smoothie} alt="menuImage" className={classes.menuImage} />}
              </React.Fragment>
              )
              }
              {label === 'Foods'
              && (
              <React.Fragment>
                {menu.categoryId === 1 && <img src={so} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 2 && <img src={talt} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 3 && <img src={teaTalt} alt="menuImage" className={classes.menuImage} />}
                {menu.categoryId === 4 && <img src={pudding} alt="menuImage" className={classes.menuImage} />}
              </React.Fragment>
              )
              }

            </div>
          ))}
        </div>
        )
      ))}
    </div>
  );
};

export default MenuListItem;
