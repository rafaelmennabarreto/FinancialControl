import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFavorecidoComponent } from './components/screen/cadastrar-favorecido/cadastrar-favorecido.component';
import { HomeComponent } from './components/screen/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'favorecido/cadastrar',
    component: CadastrarFavorecidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
