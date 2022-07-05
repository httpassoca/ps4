import { writable } from 'svelte/store';

type key = {
  code: string,
  pressing: boolean,
  secondsPressed: string | number,
}

export enum AreasEnum {
  HOME = 'homeArea',
  HEADER = 'headerArea',
}

const createKeysPressed = () => {
  const { subscribe, update } = writable<key[]>([]);
  return {
    subscribe,
    update,
    keyUp(ev: KeyboardEvent) {
      update(keys => {
        const keyIndex = keys.findIndex(
          (key) => key.code === ev.code && key.pressing
        );
        const timePressed =
          ev.timeStamp - (keys[keyIndex].secondsPressed as number);
        keys[keyIndex].secondsPressed = (timePressed / 1000).toFixed(1);
        keys[keyIndex].pressing = false;
        keys.splice(3, keys.length - 3);
        return keys;
      })
    }
  }
}

export const keysPressed = createKeysPressed();

const createActualArea = () => {
  const { subscribe, update } = writable<AreasEnum>(AreasEnum.HOME);
  return {
    subscribe, update(newArea: AreasEnum) { update(actualArea => actualArea = newArea) }
  }
}
export const actualArea = createActualArea()