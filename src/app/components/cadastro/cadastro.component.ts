import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

/**
 *
 * @param form
 */

function passwordsMatchValidator(form) {
  const senha = form.get('password')
  const confirmacaoSenha = form.get('confirmacaoSenha')

  if(senha.value !== confirmacaoSenha.value) {
    confirmacaoSenha.setErrors({ passwordsMatch: true })
  } else {
    confirmacaoSenha.setErrors(null)
  }

  return null
}

function symbolValidator(control) {
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

  if(control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.cadastroForm = this.builder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmacaoSenha: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  register() {
    console.log(this.cadastroForm.value)
  }
}
