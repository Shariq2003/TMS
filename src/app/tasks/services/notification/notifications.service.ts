import { Injectable } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private notificationService: NotificationService) {}

  showSuccess(message: string) {
    this.notificationService.show({
      content: message,
      animation: { type: 'fade', duration: 200 },
      position: { horizontal: 'right', vertical: 'top' },
      type: { style: 'success', icon: true },
      hideAfter: 3000,
      height: 40,
      width: 200,
      cssClass: 'custom-notification',
    });
  }

  showError(message: string) {
    this.notificationService.show({
      content: message,
      animation: { type: 'fade', duration: 400 },
      position: { horizontal: 'right', vertical: 'top' },
      type: { style: 'error', icon: true },
      hideAfter: 3000,
      height: 40,
      width: 200,
      cssClass: 'custom-notification',
    });
  }

  showInfo(message: string) {
    this.notificationService.show({
      content: message,
      animation: { type: 'fade', duration: 400 },
      position: { horizontal: 'right', vertical: 'top' },
      type: { style: 'info', icon: true },
      hideAfter: 3000,
      height: 40,
      width: 200,
      cssClass: 'custom-notification',
    });
  }
}
