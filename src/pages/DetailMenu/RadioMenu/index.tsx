import * as React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
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
          <div key={i}>
            <FormControlLabel
              disabled={disabled}
              value="female"
              control={(
                <Radio
                  classes={{ root: classes.root, checked: classes.checked }}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                />
              )}
              checked={value === i}
              label={i}
              onChange={() => !disabled && handleChange(i)}
              classes={{ label: classes.formLabel }}
            />
            {price && Object.keys(price).includes(i) && (<div className={disabled ? classes.disablePrice : classes.price}>{`¥${price[i]}`}</div>)}
            {label === '氷の量' && i === 'ゼロ' && (<div className={disabled ? classes.disablePrice : classes.price}>+¥70</div>)}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioMenu;
