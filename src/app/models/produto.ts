export class Produto {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  imagem: string;

  constructor(id, nome, descricao = '', valor = 0, image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.valor = valor
    this.imagem = image
  }
}
