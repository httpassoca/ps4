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

type Interaction = {
  function: () => void,
  name: string,
}
export type area = {
  [key in KeyboardCode]?: Interaction;
}
export type areas = {
  [key in string]?: area;
}

export const keys = {
  [KeyboardCode.UP]: { psbutton: PSButtonsEnum.UP },
  [KeyboardCode.LEFT]: { psbutton: PSButtonsEnum.LEFT },
  [KeyboardCode.RIGHT]: { psbutton: PSButtonsEnum.RIGHT },
  [KeyboardCode.DOWN]: { psbutton: PSButtonsEnum.DOWN },
  [KeyboardCode.ENTER]: { psbutton: PSButtonsEnum.ENTER },
  [KeyboardCode.ESC]: { psbutton: PSButtonsEnum.BACK },
  [KeyboardCode.BACKSPACE]: { psbutton: PSButtonsEnum.BACK },
  [KeyboardCode.J]: { psbutton: PSButtonsEnum.L1 },
  [KeyboardCode.K]: { psbutton: PSButtonsEnum.R1 },
  [KeyboardCode.SPACE]: { psbutton: PSButtonsEnum.MENU },
}
document.onkeydown = keyPressStart;

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

export const makeKeypressEndFunction = (area: area) => function (this: GlobalEventHandlers, ev: KeyboardEvent) {
  keysPressed.keyUp(ev);
  if ((ev.code as KeyboardCode) in area) area[ev.code].function();
}