import { keysPressed } from "./store/controls.store";

export enum PSButtonsEnum {
  UP = 'Up',
  LEFT = 'Left',
  RIGHT = 'Right',
  DOWN = 'Down',
  ENTER = 'X',
  BACK = 'Circle',
  L1 = 'L1',
  R1 = 'R1',
  MENU = 'PS Button'
}

export enum KeyboardCode {
  UP = 'ArrowUp',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
  DOWN = 'ArrowDown',
  ENTER = 'Enter',
  BACKSPACE = 'Backspace',
  ESC = 'Escape',
  J = 'KeyJ',
  K = 'KeyK',
  SPACE = 'Spacebar'
}

export enum KeyCodesEnum {
  UP = 38,
  LEFT = 37,
  RIGHT = 39,
  DOWN = 40,
  ENTER = 13,
  ESC = 27,
  BACKSPACE = 8,
  J = 74,
  K = 75,
  SPACE = 32,
}

export const keys = {
  [KeyCodesEnum.UP]: { psbutton: PSButtonsEnum.UP, key: KeyboardCode.UP },
  [KeyCodesEnum.LEFT]: { psbutton: PSButtonsEnum.LEFT, key: KeyboardCode.LEFT },
  [KeyCodesEnum.RIGHT]: { psbutton: PSButtonsEnum.RIGHT, key: KeyboardCode.RIGHT },
  [KeyCodesEnum.DOWN]: { psbutton: PSButtonsEnum.DOWN, key: KeyboardCode.DOWN },
  [KeyCodesEnum.ENTER]: { psbutton: PSButtonsEnum.ENTER, key: KeyboardCode.ENTER },
  [KeyCodesEnum.ESC]: { psbutton: PSButtonsEnum.BACK, key: KeyboardCode.ESC },
  [KeyCodesEnum.BACKSPACE]: { psbutton: PSButtonsEnum.BACK, key: KeyboardCode.BACKSPACE },
  [KeyCodesEnum.J]: { psbutton: PSButtonsEnum.L1, key: KeyboardCode.J },
  [KeyCodesEnum.K]: { psbutton: PSButtonsEnum.R1, key: KeyboardCode.K },
  [KeyCodesEnum.SPACE]: { psbutton: PSButtonsEnum.MENU, key: KeyboardCode.SPACE },
}

document.onkeydown = keyPressStart;
document.onkeyup = keyPressEnd;

function keyPressStart(this: GlobalEventHandlers, ev: KeyboardEvent) {
  if (ev.repeat) return;

  keysPressed.update(keys => {
    keys.unshift({
      code: ev.code,
      pressing: true,
      secondsPressed: ev.timeStamp,
    })
    return keys;
  })
}

function keyPressEnd(this: GlobalEventHandlers, ev: KeyboardEvent) {
  keysPressed.update(keys => {
    const keyIndex = keys.findIndex((key) => key.code === ev.code && key.pressing);
    const timePressed = ev.timeStamp - (keys[keyIndex].secondsPressed as number);
    keys[keyIndex].secondsPressed = (timePressed / 1000).toFixed(1);
    keys[keyIndex].pressing = false;
    keys.splice(3, keys.length - 3);
    return keys;
  })
}

