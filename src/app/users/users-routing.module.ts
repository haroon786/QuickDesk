import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'newticket', component: NewTicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
