import { Component, OnInit } from '@angular/core';
import { IToast } from '../toast.interface';
import { ToastService } from '../services/toast.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('messageState', [
      state('*', style({
        transform: 'translateY(0)', opacity: 1
      })),
      transition('void => *', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('2s', style({height: '0', opacity: 0})),
        
       
      ]),
    ]),
  ]
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
