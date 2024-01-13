import { ToastType } from "./toast-type";

export interface IToast {
  id: number;
  title: string;
  description: string;
  type: ToastType;
  isVisible?: boolean;
  //time: number;
}
