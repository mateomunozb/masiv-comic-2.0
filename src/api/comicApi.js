import axios from 'axios';

export default class ComicApi {
  constructor() {
    this.url = 'https://bsakz2db5g.execute-api.us-east-1.amazonaws.com/default/comicProxy';
  }

  getCurrentComic() {
    return axios(this.url);
  }
}
