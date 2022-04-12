import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto'
import { MessengerService } from 'src/app/services/messenger.service'
import { CarrinhoService } from 'src/app/services/carrinho-service'
import { CarrinhoItem } from 'src/app/models/carrinho-item';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.css']
})
export class ProdutoItemComponent implements OnInit {

  @Input() produtoItem: Produto;

  constructor(
    private msg: MessengerService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
  }

  adicionarItemAoCarrinho() {
    this.carrinhoService.adicionarProdutoAoCarrinho(new CarrinhoItem(this.produtoItem.id, this.produtoItem, 1)).subscribe(() => {
      this.msg.sendMsg(this.produtoItem)
    })
  }

  usuariologado(){
    let token =  localStorage.getItem('AccessToken');
    if (token !== null) {
      return true;
    }

    return false;
  }
}
