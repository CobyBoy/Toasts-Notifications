import { Component, OnInit } from '@angular/core';
import { IToast } from '../toast.interface';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toasts: IToast[] = [];

  constructor(private _toastService: ToastService) { }

  ngOnInit(): void {
    this._toastService.getToasts().subscribe((toasts) => {
      this.toasts = toasts;
    })
  }

  hideToast(id: number) {
    this._toastService.hideToast(id);
  }

}
