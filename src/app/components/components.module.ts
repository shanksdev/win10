import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DesktopComponent } from "./desktop/desktop.component";
import { DesktopIconsComponent } from './desktop-icons/desktop-icons.component';
import { TaskBarComponent } from './task-bar/task-bar.component';

@NgModule({
  declarations:[DesktopComponent, DesktopIconsComponent, TaskBarComponent],
  imports:[
    CommonModule
  ],
  exports:[DesktopComponent, DesktopIconsComponent]
})
export class ComponentsModule{
}
