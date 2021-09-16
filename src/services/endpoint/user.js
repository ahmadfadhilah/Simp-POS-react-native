import {api} from '../Api/webApi';

export const updateProfile = (name, email, noHp, lokasi) => {
  const body = {
      name,
      email,
      noHp,
      lokasi
  };
  return api('POST', '/update', body)
}