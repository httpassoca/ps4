import { writable } from 'svelte/store';

type key = {
  code: string,
  pressing: boolean,
  secondsPressed: string | number,
}
export const keysPressed = writable<key[]>([]);