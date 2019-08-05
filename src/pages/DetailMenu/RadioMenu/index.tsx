import * as React from 'react';
import RadioGroupCommon from 'components/RadioGroup';
import useStyles from './styles';

interface PropsInterFace {
  label: string;
  items: any;
  isRow?: boolean;
}

const RadioMenu = ({ label, items, isRow }: PropsInterFace) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.label}>{label}</div>
      <RadioGroupCommon items={items} isRow={isRow} />
    </div>
  );
};

export default RadioMenu;
