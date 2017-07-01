/* eslint-disable import/prefer-default-export */
// @flow

export function getImageUrl(id: string, height: number = 512) {
  return `https://images.jqestate.ru/${id}-jqestate-${height}`;
}
