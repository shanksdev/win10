import { Component, OnInit, Input } from '@angular/core';
import { IContextMenuConfig, IContextMenuOptions } from '../models';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {

  @Input() showMenu:boolean = false;
  @Input() config:IContextMenuConfig = {
    position:{x: 300, y:300},
    options:[
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
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleContextMenu(){
    console.log('open context menu');
    this.showMenu = !this.showMenu;
  }

}
