// @flow

const apiUrl = 'https://yard.moscow/api/v1';

export function get(resource: string) {
  return fetch(encodeURI(`${apiUrl}${resource}`)).then(res => res.json());
}

export function post(resource: string) {
  return fetch(encodeURI(`${apiUrl}${resource}`), { method: 'POST' }).then(res => res.json());
}
