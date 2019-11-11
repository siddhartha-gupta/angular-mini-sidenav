import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule, MatDividerModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
