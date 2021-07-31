import { Component, OnInit, HostListener } from '@angular/core';
import { Constants } from '../constants';
import { Shortcut } from '../models';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  @HostListener('contextmenu', ['$event'])
  onContextMenu(e:any){
    e.preventDefault();
    console.log('on right click event = ', e);
  }

  icons:any = Constants.iconPaths;
  wallpaper:string = this.icons.desktop.DEAULT_WALLPAPER;
  initialShortcuts:Array<Shortcut>=[];

  constructor() { }

  ngOnInit(): void {
    this.loadShortcutIcons();
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

  openContextMenu(){
    console.log('open context menu');
  }

}
