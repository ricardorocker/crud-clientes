import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './views/clientes/listagem/listagem.component';
import { FormularioComponent } from './views/clientes/formulario/formulario.component';

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
