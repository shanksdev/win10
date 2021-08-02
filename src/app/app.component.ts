import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Theme, IAppThemeState, IAppState } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'win10';
  currentTheme!:Observable<IAppThemeState>;
  constructor(public store:Store<IAppState>){
  }

  ngOnInit(){
    this.currentTheme = this.store.select('appTheme');
  }
}
