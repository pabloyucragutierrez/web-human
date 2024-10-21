import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    PartnersComponent,
    NosotrosComponent,
    HumanResourceComponent,
    ContactanosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
