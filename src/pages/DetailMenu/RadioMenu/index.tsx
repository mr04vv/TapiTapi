import * as React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import useStyles from './styles';

interface PropsInterFace {
  label: string;
  items: any[];
  isRow?: boolean;
  value: any;
  handleChange: (v: any) => void;
  disabled?: boolean;
  price?: any;
}

const RadioMenu = ({
  label, items, isRow, value, handleChange, disabled, price,
}: PropsInterFace) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.label}>{label}</div>
      <RadioGroup className={isRow ? classes.row : ''}>
        {items.map((i: any) => (
          <div>
            <FormControlLabel disabled={disabled} value="female" control={<Radio />} checked={value === i} label={i} onClick={() => handleChange(i)} />
            {price && Object.keys(price).includes(i) && (<div className={disabled ? classes.disablePrice : classes.price}>{`¥${price[i]}`}</div>)}
            {label === '氷の量' && i === 'ゼロ' && (<div className={disabled ? classes.disablePrice : classes.price}>+¥70</div>)}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioMenu;
