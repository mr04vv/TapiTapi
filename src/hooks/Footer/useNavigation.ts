import { useState } from 'react';
import useReactRouter from 'use-react-router';

const useNavigation = () => {
  const [value, setValue] = useState<string>('');
  const { history } = useReactRouter();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push({
      pathname: newValue,
    });
  };

  return {
    value,
    handleChange,
  };
};
export default useNavigation;
