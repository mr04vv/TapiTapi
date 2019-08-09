import * as React from 'react';
import { Button } from '@material-ui/core';
import { OrderedItemInterface } from 'interfaces/OrderedMenuInterface';
import useStyles from './styles';
import ConfirmModal from '../ConfirmModal';

interface PropsInterface {
  selectedItem: OrderedItemInterface[];
  deleteTools: {
    selectedItemId: string | false;
    setSelectedItemId: (v: string | false) => void;
    confirmDelete: () => void;
  }
}

const Item = ({ selectedItem, deleteTools }: PropsInterface) => {
  const classes = useStyles();

  return (
    <div>
      <ConfirmModal handleChange={deleteTools.setSelectedItemId} onConfirm={deleteTools.confirmDelete} isOpen={!!deleteTools.selectedItemId} isLoading={false} isDelete />
      {selectedItem.map((item: OrderedItemInterface) => (
        item.typeName === 'Drinks'
          ? (
            <React.Fragment key={item.id}>
              <hr className={classes.border} />
              <p className={classes.enMenuName}>{item.item.jaName}</p>
              <p className={classes.jaMenuName}>{item.item.enName}</p>
              <p className={classes.options}>{item.options.join('/')}</p>
              <p className={classes.options}>{`トッピング： ${item.selectedToppings.length === 0 ? 'なし' : item.selectedToppings.join('/')}`}</p>
              <div className={classes.inline}>
                <p className={classes.options}>{`価格： ${item.ammount / item.count}`}</p>
                <p className={classes.options}>{`個数： ${item.count}`}</p>
              </div>
              <Button className={classes.orderButton} onClick={() => deleteTools.setSelectedItemId(item.id!)}>✕ カートから削除</Button>
            </React.Fragment>
          )
          : (
            <React.Fragment key={item.id}>
              <hr className={classes.border} />
              <p className={classes.enMenuName}>{item.item.jaName}</p>
              <p className={classes.jaMenuName}>{item.item.enName}</p>
              <div className={classes.inline}>
                <p className={classes.options}>{`価格： ${item.ammount / item.count}`}</p>
                <p className={classes.options}>{`個数： ${item.count}`}</p>
              </div>
              <Button className={classes.orderButton} onClick={() => deleteTools.setSelectedItemId(item.id!)}>✕ カートから削除</Button>

            </React.Fragment>
          )
      ))}
    </div>
  );
};

export default Item;
