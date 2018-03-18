import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountTypeComponent } from './account/account-type/account-type.component';
import { AccountRegisterComponent } from './account/account-register/account-register.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'account-type', pathMatch: 'full' },
    { path: 'account-register/:accountType', component: AccountRegisterComponent },
    { path: 'account-type', component: AccountTypeComponent },
    { path: '**', redirectTo: 'account-type'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
