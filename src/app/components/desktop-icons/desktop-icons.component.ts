import { Component, OnInit, Input } from '@angular/core';
import { Constants } from '../constants';
import { Shortcut } from '../models';

@Component({
  selector: 'app-desktop-icons',
  templateUrl: './desktop-icons.component.html',
  styleUrls: ['./desktop-icons.component.scss']
})
export class DesktopIconsComponent implements OnInit {

  icons:any = Constants.iconPaths;

  @Input() shortcuts:Array<Shortcut> = [
    {
      url:this.icons.common.EDGE_BROWSER,
      title:'Edge'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
