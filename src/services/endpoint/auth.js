import {api} from '../Api/webApi';

export const login = (email, password) => {
  const body = {
      email,
      password,
  };

  return api('POST', '/login', body)
};

export const profile = () => {
  return api('GET', '/getUser')
};

export const logOut = () => {
  return api('GET', '/logout')
};