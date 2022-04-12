import { Produto } from './produto';

export class CarrinhoItem {
  id: string;
  produtoId: string;
  nome: string;
  quantidade: number;
  valor: number;
  imagem: string;

  constructor(id: string, produto: Produto, quantidade = 1) {
    this.id = id;
    this.produtoId = produto.id;
    this.nome = produto.nome;
    this.valor = produto.valor;
    this.imagem = produto.imagem;
    this.quantidade = quantidade;
  }
}
