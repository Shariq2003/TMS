import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader = new BehaviorSubject<boolean>(false);
  public loading: Observable<boolean> = this.loader.asObservable();

  show() {
    this.loader.next(true);
  }

  hide() {
    this.loader.next(false);
  }
}
