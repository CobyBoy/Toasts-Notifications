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

  constructor() {}

  get toasts() {
    return this.toastSubject$.getValue();
  }

  hideToast(id?: number) {
    let actual = this.toasts;
    actual = this.toasts.filter((t) => t.id != id);
    this.toastSubject$.next(actual);
  }

  setAndShowToast(data: IToast, time = 100000) {
    const { title = '', description = '', type = ToastType.DANGER } = data;
    const id = Math.floor(Math.random() * (1000 - 1) + 1);
    this.toastSubject$.next([
      ...this.toasts,
      {
        id,
        title: `${title}`,
        description,
        isVisible: true,
        type,
      },
    ]);

    setTimeout(() => {
      const finalToast = this.toasts.filter((t) => t.id != id);
      this.toastSubject$.next(finalToast);
    }, time);
  }
}
