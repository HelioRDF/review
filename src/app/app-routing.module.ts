import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlfabetoComponent } from './modules/alfabeto/alfabeto.component';
import { NumerosComponent } from './modules/numeros/numeros.component';
import { VerbosComponent } from './modules/verbos/verbos.component';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './modules/error/error.component';
import { Top3000Component } from './modules/top3000/top3000.component';
import { AprendidasComponent } from './modules/aprendidas/aprendidas.component';

const routes: Routes = [
  { path: "", component: VerbosComponent, pathMatch: 'full' },
  { path: "alfabeto", component: AlfabetoComponent },
  { path: "numeros", component: NumerosComponent },
  { path: "aprendidas", component: AprendidasComponent },
  { path: "top3000", component: Top3000Component },
  { path: "verbos", component: VerbosComponent },
  { path: "404", component: ErrorComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

