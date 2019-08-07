import * as React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import useStyles from './styles';

interface PropsInterFace {
  label: string;
  items: any[];
  isRow?: boolean;
  value: any;
  handleChange: (v: any) => void;
}

const RadioMenu = ({
  label, items, isRow, value, handleChange,
}: PropsInterFace) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.label}>{label}</div>
      <RadioGroup className={isRow ? classes.row : ''}>
        {items.map((i: any) => (
          <FormControlLabel value="female" control={<Radio />} label={i} checked={value === i} onClick={() => handleChange(i)} />
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioMenu;
