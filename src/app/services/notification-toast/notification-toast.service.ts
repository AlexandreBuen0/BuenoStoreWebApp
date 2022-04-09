import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationToastService {
  DEFAULT_SNACK_BAR_DURATION_IN_SECONDS = 15000;
  constructor(private snackBar: MatSnackBar) {}

  private open(
    message: string[] | string,
    notificationType: MatSnackBarNotificationType,
    shouldShowCloseButton: boolean,
    duration: number | null,
    verticalPosition: MatSnackBarVerticalPosition = 'top',
    horizontalPosition: MatSnackBarHorizontalPosition = 'right'
  ) {
    if (Array.isArray(message)) {
      if (message.length > 1) {
        message = message.map((value, index) => `${index + 1} - ${value}`);
      }
      message = message.join('\n');
    }

    let matSnackBarConfiguration: MatSnackBarConfig = {
      panelClass: [this.getClassName(notificationType), 'notification-toast'],
      verticalPosition: verticalPosition,
      horizontalPosition: horizontalPosition,
    };

    if (duration) {
      matSnackBarConfiguration = {
        ...matSnackBarConfiguration,
        duration: duration,
      };
    }

    const action = shouldShowCloseButton ? 'Fechar' : '';

    this.snackBar.open(message, action, matSnackBarConfiguration);
  }

  success(
    message: string[] | string,
    duration: number = this.DEFAULT_SNACK_BAR_DURATION_IN_SECONDS
  ): void {
    this.open(message, MatSnackBarNotificationType.Success, false, duration);
  }

  info(
    message: string[] | string,
    duration: number | null = this.DEFAULT_SNACK_BAR_DURATION_IN_SECONDS
  ): void {
    this.open(message, MatSnackBarNotificationType.Info, false, duration);
  }

  error(message: string[] | string): void {
    this.open(message, MatSnackBarNotificationType.Error, true, null);
  }

  private getClassName(notificationType: MatSnackBarNotificationType): string {
    switch (notificationType) {
      case MatSnackBarNotificationType.Error:
        return 'notification-toast-error';
      case MatSnackBarNotificationType.Success:
        return 'notification-toast-success';
      default:
        return 'notification-toast-info';
    }
  }
}

enum MatSnackBarNotificationType {
  Error,
  Info,
  Success,
}
