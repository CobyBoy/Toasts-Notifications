import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastType } from './toast-type';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  openSuccessToast() {
    this.toastService.setAndShowToast({
      title: 'Success title',
      description: 'Success description',
      type: ToastType.SUCCESS,
      isVisible: true,
      id: 1,
    },2500);
  }
  openInfoToast() {
    this.toastService.setAndShowToast({
      title: 'Info title',
      description: 'info descripcion',
      type: ToastType.INFO,
      isVisible: true,
      id: 1,
    }, 1500);
  }
  openErrorToast() {
    this.toastService.setAndShowToast({
      title: 'error title',
      description: 'error descripcion',
      type: ToastType.DANGER,
      isVisible: true,
      id: 1,
    });
  }
}
