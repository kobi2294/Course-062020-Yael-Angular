import { BehaviorSubject, Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;
  private counter$ = new BehaviorSubject<number>(this.counter);

  constructor() { }

  getValue(): Observable<number> {
    return this.counter$.asObservable();
  }

  async increment() {
    this.counter++;
    this.counter$.next(this.counter);
  }

  async decrement() {
    this.counter--;
    this.counter$.next(this.counter);
  }
}
