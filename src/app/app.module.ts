import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListagemComponent } from './views/clientes/listagem/listagem.component';
import { FormularioComponent } from './views/clientes/formulario/formulario.component';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { CardComponent } from './components/card/card.component';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListagemComponent,
    FormularioComponent,
    CardComponent,
    CpfPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    FormsModule
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
