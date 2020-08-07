import { NgModule } from '@angular/core';
import { NavigationV2Component } from './navigation-v2.component';
import { NavigationCtrlComponent } from './navigation-ctrl/navigation-ctrl.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavigationCtrlComponent, NavigationV2Component],
  imports: [
    CommonModule
  ],
  exports: [NavigationCtrlComponent, NavigationV2Component]
})
export class NavigationV2Module { }

