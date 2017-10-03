import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { ListComponent } from './list.component';
import { AuthGuard } from '../user/auth-guard.service';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'list',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: ListComponent }
        ]
      }
    ])
  ],
  declarations: [
    ListComponent
  ],
  providers: [AuthGuard]
})
export class ListModule { }
