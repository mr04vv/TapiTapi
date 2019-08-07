import * as React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';

interface PropsInterface {
  label: string,
  items: number[],
  handleChange: (v: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
  value: number;
}

const SelectMenu = ({
  label, items, value, handleChange,
}:PropsInterface) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.titleLetter}>{label}</div>
      <Select value={value} onChange={handleChange}>
        {items.map((item: number) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectMenu;
