import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { RegistrarUsuario } from 'src/app/models/registrar-usuario';
import { UsuarioService } from 'src/app/services/usuario-service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);
  confirmacaoSenha = new FormControl('', [Validators.required]);
  
  exibir = true;
  exibirConfirmacao = true;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() { }

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

  validarConfirmacaoSenha() {
    if (this.confirmacaoSenha.hasError('required')) {
      return 'O campo não pode ser vazio.';
    }

    if (this.confirmacaoSenha.value !== this.senha.value) {
      this.confirmacaoSenha.setErrors({'invalid': true})
      return 'As senhas devem ser iguais.';
    }

    return this.confirmacaoSenha.hasError('confirmacaoSenha') ? 'A confirmação da senha não está em um formato válido.' : '';
  }

  Submit() {
    var registrarUsuarioModel = new RegistrarUsuario(this.email.value, this.senha.value, this.confirmacaoSenha.value);
    
    this.usuarioService.registrarUsuario(registrarUsuarioModel).subscribe(response => {
      console.log(response);
    });
  }
}
