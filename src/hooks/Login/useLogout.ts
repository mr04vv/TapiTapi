import { useDispatch } from 'react-redux';
import { signOut } from 'reduxes/modules/accounts/login';
import useReactRouter from 'use-react-router';

const useLogout = () => {
  const dispatch = useDispatch();
  const { history } = useReactRouter();

  const logout = async () => {
    dispatch<any>(signOut());
    history.push({
      pathname: '/login',
    });
  };

  return () => logout();
};

export default useLogout;
