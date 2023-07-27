import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordListComponent } from './modules/word-list/word-list.component';
import { AlfabetoComponent } from './modules/alfabeto/alfabeto.component';
import { NumerosComponent } from './modules/numeros/numeros.component';
import { VerbosComponent } from './modules/verbos/verbos.component';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './modules/error/error.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:'full'},
   {path:"alfabeto", component:AlfabetoComponent},
   {path:"numeros", component:NumerosComponent},
   {path:"aprendidas", component:WordListComponent},
   {path:"top3000", component:WordListComponent},
   {path:"verbos", component:VerbosComponent},
   {path:"404", component:ErrorComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

