import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CarrinhoService } from 'src/app/services/carrinho-service';
import { CarrinhoItem } from 'src/app/models/carrinho-item';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinhoItens: CarrinhoItem[] = [];
  valorTotal = 0

  constructor(
    private msg: MessengerService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    let token =  localStorage.getItem('AccessToken');
    if (token !== null) {
      this.observadorCarrinho();
      this.carregarItensCarrinho();
    }
  }

  observadorCarrinho() {
    this.msg.getMsg().subscribe(() => {
      this.carregarItensCarrinho();
    })
  }

  carregarItensCarrinho() {
    this.carrinhoService.obterCarrinho().subscribe((items: CarrinhoItem[]) => {
      this.carrinhoItens = items;
      this.calcularValorCarrinho();
    })
  }

  calcularValorCarrinho() {
    this.valorTotal = 0
    this.carrinhoItens.forEach(item => {
      this.valorTotal += (item.quantidade * item.valor)
    })
  }
}
