import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSidebarComponent } from './toggle-sidebar.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    ToggleSidebarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ToggleSidebarComponent,
  ]
})
export class ToggleSidebarModule { }
