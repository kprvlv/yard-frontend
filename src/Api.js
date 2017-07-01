const apiUrl = 'https://api.jqestate.ru/v1';

export function get(resource) {
  return fetch(apiUrl + resource).then(res => res.json());
}

export function post(resource) {
  return fetch(apiUrl + resource, { method: 'POST' }).then(res => res.json());
}
