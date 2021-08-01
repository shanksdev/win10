import * as AppActions from './app.actions';
import { Theme, IAppThemeState } from '../app.models';
import { Action, createReducer, on } from '@ngrx/store';

export const initialAppThemeState: IAppThemeState = {
  theme : 'dark',
  desktopMenuVisible: false
};

const appThemeReducer = createReducer(
  initialAppThemeState,
  on(AppActions.UpdateTheme, (state, {payload}) => ({
    ...state,
    theme:payload
  })),
  on(AppActions.DesktopShowMenu, (state, {payload}) => ({
    ...state,
    desktopMenuVisible:payload
  })),
  on(AppActions.DesktopHideMenu, (state, {payload}) => ({
    ...state,
    desktopMenuVisible:payload
  }))
);

export function reducer(state:IAppThemeState|undefined, action:Action){
  return appThemeReducer(state, action);
}

// export function appThemeReducer(state:IAppThemeState = initialAppThemeState, action:Action): IAppThemeState{
//   const castedAction = <AppActions.UpdateTheme>action;
//   switch(action.type){
//     case AppActions.UPDATE_THEME:
//       return {
//         ...state,
//         theme:castedAction.payload
//       }
//     // case AppActions.DESKTOP_MENU_SHOW:
//     //   return {
//     //     ...state,
//     //     theme:action.payload
//     //   }
//     default:
//       return state;
//   }
// }
