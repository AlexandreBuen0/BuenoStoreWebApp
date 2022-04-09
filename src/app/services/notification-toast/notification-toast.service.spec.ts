import { TestBed } from '@angular/core/testing';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotificationToastService } from './notification-toast.service';

describe('NotificationToastService', () => {
  let service: NotificationToastService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, BrowserAnimationsModule],
    });
    service = TestBed.inject(NotificationToastService);
    snackBar = TestBed.inject(MatSnackBar);
    spyOn(snackBar, 'open');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#sucess should open snack bar with only one message, notification-toast-success class and default duration ', () => {
    const message = 'Hello world!';

    const expectedConfig: MatSnackBarConfig = {
      panelClass: ['notification-toast-success', 'notification-toast'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 15000,
    };

    service.success(message);

    expect(snackBar.open).toHaveBeenCalledWith(message, '', expectedConfig);
  });

  it('#sucess should open snack bar with many messages, notification-toast-success class and default duration ', () => {
    const messages = ['Hello world!', 'message'];

    const expectedConfig: MatSnackBarConfig = {
      panelClass: ['notification-toast-success', 'notification-toast'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 15000,
    };

    service.success(messages);

    expect(snackBar.open).toHaveBeenCalledWith(
      `1 - ${messages[0]}\n2 - ${messages[1]}`,
      '',
      expectedConfig
    );
  });

  it('#sucess should open snack bar with only one message, notification-toast-success class and duration = 90000 ', () => {
    const message = 'Hello world!';
    const duration = 90000;

    const expectedConfig: MatSnackBarConfig = {
      panelClass: ['notification-toast-success', 'notification-toast'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: duration,
    };

    service.success(message, duration);

    expect(snackBar.open).toHaveBeenCalledWith(message, '', expectedConfig);
  });

  it('#error should open snack bar with only one message, notification-toast-error class, without default duration and showing action button', () => {
    const message = 'Hello world!';

    const expectedConfig: MatSnackBarConfig = {
      panelClass: ['notification-toast-error', 'notification-toast'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
    };

    service.error(message);

    expect(snackBar.open).toHaveBeenCalledWith(
      message,
      'Fechar',
      expectedConfig
    );
  });

  it('#error should open snack bar with many messages, notification-toast-error class, without default duration and showing action button', () => {
    const messages = ['Hello world!', 'Message'];

    const expectedConfig: MatSnackBarConfig = {
      panelClass: ['notification-toast-error', 'notification-toast'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
    };

    service.error(messages);

    expect(snackBar.open).toHaveBeenCalledWith(
      `1 - ${messages[0]}\n2 - ${messages[1]}`,
      'Fechar',
      expectedConfig
    );
  });

  it('#info should open snack bar with only one message, notification-toast-info class, with default duration', () => {
    const message = 'Hello world!';

    const expectedConfig: MatSnackBarConfig = {
      panelClass: ['notification-toast-info', 'notification-toast'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 15000,
    };

    service.info(message);

    expect(snackBar.open).toHaveBeenCalledWith(message, '', expectedConfig);
  });

  it('#info should open snack bar with many messages, notification-toast-info class, with another duration', () => {
    const messages = ['Hello world!', 'Message'];
    const duration = 90000;

    const expectedConfig: MatSnackBarConfig = {
      panelClass: ['notification-toast-info', 'notification-toast'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: duration,
    };

    service.info(messages, duration);

    expect(snackBar.open).toHaveBeenCalledWith(
      `1 - ${messages[0]}\n2 - ${messages[1]}`,
      '',
      expectedConfig
    );
  });
});
