import { Component, OnInit, HostListener } from '@angular/core';
import { Constants } from '../constants';
import { Shortcut, IPosition, IContextMenuOptions } from '../models';
import { Store } from '@ngrx/store';
import { Theme, IAppState, IAppThemeState } from 'src/app/app.models';
import * as AppActions from 'src/app/store/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {

  @HostListener('contextmenu', ['$event'])
  onContextMenu(e:any){
    e.preventDefault();
    console.log('on right click event = ', e);
    this.menuPostion.x = e.clientX;
    this.menuPostion.y = e.clientY;
    this.toggleContextMenu();
  }

  icons:any = Constants.iconPaths;
  wallpaper:string = this.icons.desktop.DEAULT_WALLPAPER;
  initialShortcuts:Array<Shortcut>=[];
  showMenu:boolean = false;
  showMenuObservable!:Observable<IAppThemeState>;
  menuPostion:IPosition = {
    x:0,
    y:0
  };
  menuOptions:IContextMenuOptions[] = [
    {
      id:'1',
      label:'Option 1',
      containsSubOptions:false
    },
    {
      id:'2',
      label:'Option 2',
      containsSubOptions:false
    },
    {
      id:'3',
      label:'Option 3',
      containsSubOptions:false
    },
    {
      id:'4',
      label:'Option 4',
      containsSubOptions:false
    },
  ]

  constructor(public store:Store<IAppState>) { }

  ngOnInit(): void {
    this.loadShortcutIcons();
    this.showMenuObservable = this.store.select('appTheme')
  }

  loadShortcutIcons(){
    this.initialShortcuts = [
      {
        url:this.icons.common.EDGE_BROWSER,
        title:'Microsoft Edge',
      },
      {
        url:this.icons.common.EDGE_BROWSER,
        title:'Microsoft Edge erwieu jsjdlk jsldskjfl ksdjfl skdjfl ksdjf lskjd',
      },
      {
        url:this.icons.common.EDGE_BROWSER,
        title:'Microsoft Edge',
      },
      {
        url:this.icons.common.EDGE_BROWSER,
        title:'Microsoft Edge',
      }
    ]
  }

  toggleContextMenu(){
    console.log('open context menu');
    this.showMenu = !this.showMenu;
    this.store.dispatch(AppActions.DesktopShowHideMenu({payload: this.showMenu}));
  }

  onThemeChange(newTheme:Theme){
    console.log('changing theme');
    this.store.dispatch(AppActions.UpdateTheme({payload:newTheme}));
  }
}
