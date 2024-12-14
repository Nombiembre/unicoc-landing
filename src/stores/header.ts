import { atom } from 'nanostores';

export const $isNavOpen = atom(false);

export default class NavStore {
  static setOpen(value: boolean) {
    $isNavOpen.set(value);
  }
}
