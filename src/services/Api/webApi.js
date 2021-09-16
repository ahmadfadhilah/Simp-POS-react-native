export const host = 'https://d-go.herokuapp.com/api';
import {ToastAndroid} from 'react-native';
import {clearToken} from '../../redux/action';
import store from '../../redux/store';

export const api = (method, path, body = null, file = null) => {
  const {token} = store.getState();
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  file ? null : headers.append('Content-Type', 'application/json');
  token !== null ? headers.append('Authorization', 'Bearer ' + token) : null;

  const data = fetch(host + path, {
    method: method,
    headers: headers,
    body: method === 'GET' ? null : file ? body : JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((resJson) => {
      if (resJson.status) {
        if (resJson.status.split(' ')[0] === 'Token') {
          store.dispatch(clearToken());
        }
      }
      console.log(resJson);
      return resJson;
    })
    .catch((e) => {
      console.log(e);
      ToastAndroid.show('gagal menyambung', ToastAndroid.LONG);
    });
  return data;
};