import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarState = 'open';
  private sidebarStateChanged$ = new BehaviorSubject<string>(this.sidebarState);
  public sidebarStateObservable$ = this.sidebarStateChanged$.asObservable();

  constructor() {
    this.sidebarStateChanged$.next('open');
  }

  toggle() {
    this.sidebarState = this.sidebarState === 'open' ? 'close' : 'open';
    this.sidebarStateChanged$.next(this.sidebarState);
  }
}
