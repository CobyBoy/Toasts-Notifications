import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  constructor(private _toastService: ToastService) { }

  ngOnInit(): void {
  }

  hideToast(id: number) {
    this._toastService.hideToast(id);
  }

}
