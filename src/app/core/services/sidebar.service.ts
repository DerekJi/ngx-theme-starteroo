import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private active = false;
  private activeState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.active);

  constructor() { }

  /**
   *
   */
  public active$(): Observable<boolean> {
    return this.activeState.asObservable();
  }

  /**
   *
   * @param active boolean
   */
  public toggleActive(active: boolean = null): boolean {
    this.active = (active !== null) ? active : !this.active;
    this.activeState.next(this.active);
    return this.active;
  }
}
