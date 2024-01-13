import { Injectable } from '@angular/core';
import { IToast } from '../toast.interface';
import { BehaviorSubject } from 'rxjs'
import { ToastType } from '../toast-type';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private initialData: IToast[] = [];
  private toastSubject$: BehaviorSubject<IToast[]> = new BehaviorSubject(
    this.initialData
  );
  private timer!: NodeJS.Timeout | null

  constructor() {}

  getToasts() {
    return this.toastSubject$.asObservable();
  }

  hideToast(id: number) {
    let actual = this.toastSubject$.value;
    actual = actual.filter((t) => t.id != id);
    this.toastSubject$.next(actual);
  }

  setAndShowToast(data: IToast, time = 500000) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    
    const { title = '', description = '', type = ToastType.DANGER } = data;
    const id = Math.floor(Math.random() * (1000 - 1) + 1);
    this.toastSubject$.next([
      ...this.toastSubject$.value,
      {
        id,
        title: `${title}`,
        description,
        isVisible: true,
        type,
      },
    ]);

    this.timer = setTimeout(() => {
      const finalToast = this.toastSubject$.value.filter((t) => t.id != id);
      this.toastSubject$.next(finalToast);
    }, time);

    this.timer = null;
   
  }
}
