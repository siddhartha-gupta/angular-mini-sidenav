import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.scss']
})
export class ToggleSidebarComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() { }

  toggleSideNav() {
    this.sidebarService.toggle();
  }
}
