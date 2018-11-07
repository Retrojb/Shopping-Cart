import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account/account-home/account-home.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { AddressbookComponent } from './account/addressbook/addressbook.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'account', loadChildren: 'app/account/account.module#AccountModule'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
