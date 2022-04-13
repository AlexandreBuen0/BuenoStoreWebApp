import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutoListagemComponent } from './components/produto/produto-listagem/produto-listagem.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { PaginaNaoEncontradaComponent } from './components/shared/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'home', component: ProdutoListagemComponent },
  { path: 'promocoes', component: PromocoesComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
