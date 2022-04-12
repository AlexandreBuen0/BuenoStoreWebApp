import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoItem } from 'src/app/models/carrinho-item';

@Component({
  selector: 'app-carrinho-item',
  templateUrl: './carrinho-item.component.html',
  styleUrls: ['./carrinho-item.component.css']
})
export class CarrinhoItemComponent implements OnInit {

  @Input() carrinhoItem: CarrinhoItem;

  constructor() { }

  ngOnInit() {
  }

}
