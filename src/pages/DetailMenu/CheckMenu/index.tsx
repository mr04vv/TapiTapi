import * as React from 'react';
import {
  RadioGroup, FormControlLabel, Checkbox,
} from '@material-ui/core';
import useStyles from './styles';

interface PropsInterFace {
  label: string;
  items: any[];
  isRow?: boolean;
  value: any[];
  handleChange: (v: any) => void;
  disabled?: boolean;
  price?: any;
}

const CheckMenu = ({
  label, items, isRow, value, handleChange, disabled,
}: PropsInterFace) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.label}>{label}</div>
      <RadioGroup className={isRow ? classes.row : ''}>
        {items.map((i: any) => (
          <div className={classes.inline}>
            <FormControlLabel disabled={disabled} control={<Checkbox />} checked={value.includes(i)} label={i} onChange={() => handleChange(i)} />
            {<div className={classes.price}>+¥70</div>}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CheckMenu;
