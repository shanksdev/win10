import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesktopComponent } from "./desktop/desktop.component";
import { DesktopIconsComponent } from './desktop-icons/desktop-icons.component';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { StartMenuComponent } from './start-menu/start-menu.component';

@NgModule({
  declarations:[DesktopComponent, DesktopIconsComponent, TaskBarComponent, ContextMenuComponent, StartMenuComponent],
  imports:[
    CommonModule,
    BrowserAnimationsModule
  ],
  exports:[DesktopComponent, DesktopIconsComponent, StartMenuComponent]
})
export class ComponentsModule{
}
