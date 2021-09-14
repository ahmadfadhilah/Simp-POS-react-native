import {clearToken} from '../../redux/action';
import store from '../../redux/store';
import {apiPrivate, apiPublic} from '../Api/webApi';
import {removeToken} from '../token/Token';

export const logout = () => {
  removeToken();
  store.dispatch(clearToken());
};

export const loginServices = (email, password) => {
  return apiPublic.post('/login', {
    email,
    password,
  });
};