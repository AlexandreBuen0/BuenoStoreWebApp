import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { produtoUrl } from 'src/app/config/api';

import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(produtoUrl);
  }
}
