import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastCtrl: ToastController) { }

  async showSuccess(message: string) {
    await this.showToast(message, 'success', 'checkmark-circle-outline');
  }

  async showError(message: string) {
    await this.showToast(message, 'danger', 'close-circle-outline');
  }

  async showWarning(message: string) {
    await this.showToast(message, 'warning', 'alert-circle-outline');
  }

  private async showToast(
    message: string, 
    color: string = 'dark',
    icon: any,
    duration: number = 2000,
    position: 'top' | 'bottom' | 'middle' = 'top'
  ) 
  
  {
    const toast = await this.toastCtrl.create({
      message,
      icon,
      duration,
      color,
      position,
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel'
        }
      ],
      swipeGesture: "vertical",
      cssClass: 'custom-toast',
      // animated: true,
      // mode: 'ios'
    });

    await toast.present();
  }
  
}
