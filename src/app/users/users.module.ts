import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {MatCardModule} from '@angular/material/card';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@NgModule({
  declarations: [UsersComponent, NewTicketComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule
  ]
})
export class UsersModule { }
