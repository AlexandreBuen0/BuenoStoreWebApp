import { CarrinhoItem } from "./carrinho-item";

export class Carrinho {
    id: string;
    clientId: string;
    valorTotal: number;
    itens: CarrinhoItem[];
  
    constructor(id: string, clientId: string, valorTotal: number, itens: CarrinhoItem[]) {
      this.id = id;
      this.clientId = clientId;
      this.valorTotal = valorTotal;
      this.itens = itens;
    }
  }