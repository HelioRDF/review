import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordListComponent } from './modules/word-list/word-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './shared/menu/menu.component';
import { AlfabetoComponent } from './modules/alfabeto/alfabeto.component';
import { NumerosComponent } from './modules/numeros/numeros.component';
import { VerbosComponent } from './modules/verbos/verbos.component';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './modules/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    MenuComponent,
    AlfabetoComponent,
    NumerosComponent,
    VerbosComponent,
    HomeComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
