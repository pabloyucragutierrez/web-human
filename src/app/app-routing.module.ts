import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PartnersComponent } from './partners/partners.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'human-resource',
    component: HumanResourceComponent,
  },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
