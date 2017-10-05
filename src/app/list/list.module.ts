import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { ListComponent } from './list.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { AuthGuard } from '../user/auth.guard';

@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'list',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: ListComponent },
          { path: ':id/edit', component: ListEditComponent }
        ]
      }
    ])
  ],
  declarations: [
    ListComponent,
    ListEditComponent
  ],
  providers: [AuthGuard]
})
export class ListModule { }
