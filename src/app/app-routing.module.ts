import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './views/clientes/formulario/formulario.component';
import { ListagemComponent } from './views/clientes/listagem/listagem.component';

const routes: Routes = [
  {
    path: 'clientes',
    title: 'Clientes Listagem',
    component: ListagemComponent,
  },
  {
    path: 'clientes/formulario',
    redirectTo: 'clientes/formulario/',
    pathMatch: 'full',
  },
  { path: 'clientes/formulario/:id', component: FormularioComponent },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
