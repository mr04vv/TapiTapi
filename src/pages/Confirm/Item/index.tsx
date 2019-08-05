import * as React from 'react';
import useStyles from './styles';


const Item = ({ selectedItem }: any) => {
  const classes = useStyles();

  return (
    <div>
      {selectedItem.map((item: any) => (
        <React.Fragment>
          <hr className={classes.border} />
          <p className={classes.enMenuName}>{item.jaName}</p>
          <p className={classes.jaMenuName}>{item.enName}</p>
          <p className={classes.options}>{item.options.join('/')}</p>
          <p className={classes.options}>{`トッピング： ${item.toppings.length === 0 ? 'なし' : item.toppings.join('/')}`}</p>
          <div className={classes.inline}>
            <p className={classes.options}>{`価格： ${item.price}`}</p>
            <p className={classes.options}>{`個数： ${item.sum}`}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Item;
