import { Action, createAction, props } from "@ngrx/store";
import { Theme } from '../app.models';

export const UpdateTheme = createAction('UPDATE_THEME', props<{payload: Theme}>());
export const DesktopShowMenu = createAction('DESKTOP_MENU_SHOW', props<{payload: boolean}>());
export const DesktopHideMenu = createAction('DESKTOP_MENU_HIDE', props<{payload: boolean}>());

// export class UpdateTheme implements Action {
//   readonly type = UPDATE_THEME;
//   constructor(public payload:Theme){}
// }