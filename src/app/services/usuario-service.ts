import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError as observableThrowError } from 'rxjs';

import { loginUrl, registrarUsuarioUrl } from '../config/api';
import { RegistrarUsuario } from '../models/registrar-usuario';
import { NotificationToastService } from './notification-toast/notification-toast.service';
import { Login } from '../models/login';
import {Router} from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
              private readonly notificationToastService: NotificationToastService,
              private router: Router) { }

  registrarUsuario(registrarUsuario: RegistrarUsuario): Observable<any> {
    return this.http.post(registrarUsuarioUrl, registrarUsuario).pipe(
      map((res: any) => {
        this.setToken(res);
        this.router.navigate(['/home'])
        return res;
      }),
      catchError(error => {
        this.notificationToastService.error(error.error.errors.Mensagens);
        return observableThrowError(error);
      })
    );
  }

  login(login: Login): Observable<any> {
    return this.http.post(loginUrl, login).pipe(
      map((res: any) => {
        this.setToken(res);
        this.router.navigate(['/home'])
      }),
      catchError(error => {
        this.notificationToastService.error(error.error.errors.Mensagens);
        return observableThrowError(error);
      })
    );
  }

  setToken(data: any){
    window.localStorage.setItem('AccessToken', (data.accessToken));
    window.localStorage.setItem('Userdata', (JSON.stringify(data.usuarioToken)));
  }
}
