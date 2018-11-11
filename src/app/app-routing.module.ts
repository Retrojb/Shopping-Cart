import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './auth.service';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'account', loadChildren: '../app/account/account.module#AccountModule'},
  {path: 'admin', component: AdminComponent},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
