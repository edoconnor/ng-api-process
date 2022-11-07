import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './component/users/users.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'users', component: UsersComponent },

  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
