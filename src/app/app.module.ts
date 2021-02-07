import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarFavorecidoComponent } from './components/screen/cadastrar-favorecido/cadastrar-favorecido.component';
import { HomeComponent } from './components/screen/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CadastrarFavorecidoComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
