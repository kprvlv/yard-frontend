// @flow

const apiUrl = 'https://api.jqestate.ru/v1';

export function get(resource: string) {
  return fetch(apiUrl + resource).then(res => res.json());
}

export function post(resource: string) {
  return fetch(apiUrl + resource, { method: 'POST' }).then(res => res.json());
}
