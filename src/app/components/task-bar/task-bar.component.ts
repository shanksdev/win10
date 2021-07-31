import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.scss']
})
export class TaskBarComponent implements OnInit {

  // @ViewChild('taskBar') taskBar: ElementRef;

  icons:any = Constants.iconPaths;
  constructor() { }

  ngOnInit(): void {
  }

}
