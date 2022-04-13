import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { UsuarioService } from 'src/app/services/usuario-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  exibir = true;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  validarEmail() {
    if (this.email.hasError('required')) {
      return 'O campo não pode ser vazio.';
    }

    return this.email.hasError('email') ? 'Esse e-mail não esta em um formato válido.' : '';
  }

  validarSenha() {
    if (this.senha.hasError('required')) {
      return 'O campo não pode ser vazio.';
    }

    return this.senha.hasError('senha') ? 'A senha não esta em um formato válido.' : '';
  }

  login() {
    if (this.email.hasError('required') || this.email.hasError('email') || this.senha.hasError('required') || this.senha.hasError('senha')) {
      return;
    }
    
    var login = new Login(this.email.value, this.senha.value);
    
    this.usuarioService.login(login).subscribe(response => {
      console.log(response);
    });
  }

}
