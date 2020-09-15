import axios, { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response;

const requests = {
  get: (url: string) =>
    axios
      .get(url)
      .then(responseBody),
};

export default requests;
