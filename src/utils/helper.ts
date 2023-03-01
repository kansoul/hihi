export function getSavedState(key: string) {
  if (key) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  return '';
}

export function saveState(key: any, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function goodEmptyCheck(value: any) {
  return Object.keys(value).length === 0 && value.constructor === Object; // 👈 constructor check
}

export const changeToArr = (num: number) => {
  let indents = [];
  for (let i = 0; i < num; i++) {
    indents.push(i);
  }
  return indents;
};
