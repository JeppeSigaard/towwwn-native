import { stringify } from "query-string";
const baseURL = "http://towwwn.dk/api/svendborg/";
export class Api {
  get(edge, query) {
    return new Promise((resolve, reject) => {
      fetch(baseURL + edge + "?" + stringify(query))
        .then(resp => {
          resolve(resp.json());
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}
