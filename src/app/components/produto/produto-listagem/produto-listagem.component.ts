import { Component, OnInit } from '@angular/core';

import { ProdutoService } from 'src/app/services/produto.service'
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  produtos: Produto[] = []
  wishlist: number[] = []

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.obterProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    })
  }
}
