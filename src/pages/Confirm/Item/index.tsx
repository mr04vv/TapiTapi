import * as React from 'react';
import useStyles from './styles';


const Item = ({ selectedItem }: any) => {
  const classes = useStyles();

  return (
    <div>
      {selectedItem.map((item: any) => (
        item.typeName === 'Drinks'
          ? (
            <React.Fragment>
              <hr className={classes.border} />
              <p className={classes.enMenuName}>{item.item.jaName}</p>
              <p className={classes.jaMenuName}>{item.item.enName}</p>
              <p className={classes.options}>{item.options.join('/')}</p>
              <p className={classes.options}>{`トッピング： ${item.selectedToppings.length === 0 ? 'なし' : item.selectedToppings.join('/')}`}</p>
              <div className={classes.inline}>
                <p className={classes.options}>{`価格： ${item.ammount}`}</p>
                <p className={classes.options}>{`個数： ${item.count}`}</p>
              </div>
            </React.Fragment>
          )
          : (
            <React.Fragment>
              <hr className={classes.border} />
              <p className={classes.enMenuName}>{item.item.jaName}</p>
              <p className={classes.jaMenuName}>{item.item.enName}</p>
              <div className={classes.inline}>
                <p className={classes.options}>{`価格： ${item.ammount}`}</p>
                <p className={classes.options}>{`個数： ${item.count}`}</p>
              </div>
            </React.Fragment>
          )
      ))}
    </div>
  );
};

export default Item;
