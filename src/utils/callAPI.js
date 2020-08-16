import Axios from 'axios';
const URL_API = 'http://movie0706.cybersoft.edu.vn/api';

export const callAPI = (uri, method, data, params) => {
  return Axios({
    url: `${URL_API}/${uri}`,
    method,
    data,
    ...params,
  });
};
