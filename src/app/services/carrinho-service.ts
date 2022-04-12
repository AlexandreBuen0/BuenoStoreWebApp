import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CarrinhoItem } from '../models/carrinho-item';

import { carrinhoUrl } from '../config/api';
import { NotificationToastService } from './notification-toast/notification-toast.service';
import { Carrinho } from '../models/carrinho';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient,
              private readonly notificationToastService: NotificationToastService) { }

  obterCarrinho(): Observable<CarrinhoItem[]> {
    
    return this.http.get<Carrinho>(carrinhoUrl).pipe(
      map((result: Carrinho) => {
        let carrinhoItens: CarrinhoItem[] = [];

        for (let item of result.itens) {
          let produtoExistente = false

          for (let i in carrinhoItens) {
            if (carrinhoItens[i].produtoId === item.produtoId) {
              carrinhoItens[i].quantidade++
              produtoExistente = true
              break;
            }
          }

          if (!produtoExistente) {
            var produto = new Produto(item.produtoId, item.nome, '', item.valor, item.imagem);
            carrinhoItens.push(new CarrinhoItem(item.id, produto, item.quantidade));
          }
        }

        return carrinhoItens;
      }),
      catchError(error => {
        this.notificationToastService.error(error.error.errors.Mensagens);
        return observableThrowError(error);
      })
    );
  }

  adicionarProdutoAoCarrinho(carrinhoItem: CarrinhoItem): Observable<any> {
    return this.http.post(carrinhoUrl, carrinhoItem).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(error => {
        this.notificationToastService.error(error.error.errors.Mensagens);
        return observableThrowError(error);
      })
    );
  }
}
