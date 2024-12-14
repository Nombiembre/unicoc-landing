import { atom } from 'nanostores';

export type FilterType = 'pregrado' | 'posgrado';
export const filterStore = atom<FilterType>('pregrado');
