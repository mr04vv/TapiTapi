import * as React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';

const SelectMenu = ({ label, items }:{label: string, items: any}) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.titleLetter}>{label}</div>
      <Select>
        {items.map(() => (
          <MenuItem>アイテム</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectMenu;
