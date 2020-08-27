import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

export abstract class BaseListBehaviorSubjectService<T> extends BehaviorSubject<T[]> {

  protected data: T[] = [];

  /**
   *
   */
  get values$(): Observable<T[]> { return this.asObservable(); }

  /**
   *
   */
  get values(): T[] { return Object.assign([], this.data); }

  /**
   *
   * @param options placeholder for child classes
   * @param force a boolean flag to indicate if reads data anyway
   */
  read(options: any = null, force: boolean = false): void {
    if (force || !this.data || !this.data.length) {
      this.fetchValues(options).pipe(
        tap((data: T[]) => {
          this.setValues(data);
        }),
      )
      .subscribe();
    }
  }

  /**
   *
   * @param options placeholder for child classes
   */
  abstract fetchValues(options?: any): Observable<T[]>;

  /**
   *
   * @param nodes T[]
   */
  setValues(nodes: T[]): void {
    this.data = Object.assign([], nodes || []);
    this.next(this.data);
  }

  constructor() {
    super([]);
  }

}
