import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home.component';
import { ContactComponent } from './pages/contact.component';
import { NotFoundComponent } from './pages/notfound.component';

import { AppRoutingModule} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
