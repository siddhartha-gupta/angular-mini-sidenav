import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ToggleSidebarModule } from '../toggle-sidebar/toggle-sidebar.module';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ToggleSidebarModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
