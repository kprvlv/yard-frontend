/* eslint-disable import/prefer-default-export */
// @flow

export function getImageUrl(id: string, height: number = 512): string {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${height}`;
}

export function declOfNum(numeral: number, declensions: Array<string>): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${declensions[
    numeral % 100 > 4 && numeral % 100 < 20 ? 2 : cases[numeral % 10 < 5 ? numeral % 10 : 5]
  ]}`;
}
