export class RegistrarUsuario {
    email: string;
    senha: string;
    senhaConfirmacao: string;
  
    constructor(email, senha, senhaConfirmacao) {
      this.email = email
      this.senha = senha
      this.senhaConfirmacao = senhaConfirmacao
    }
  }
  