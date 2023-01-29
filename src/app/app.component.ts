import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ToastType } from './toast-type';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  openToast() {
    this.toastService.setAndShowToast({
      title: 'un titlo nuevo',
      description: 'una descripbion',
      type: ToastType.INFO,
      isVisible: true,
      id: 1,
    });
  }
}
