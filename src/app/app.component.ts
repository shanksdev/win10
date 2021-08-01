import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Theme } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'win10';
  currentTheme!:Observable<{theme: Theme}>;
  constructor(public store:Store<{appTheme: {theme:Theme}}>){
  }

  ngOnInit(){
    this.currentTheme = this.store.select('appTheme');
  }
}
