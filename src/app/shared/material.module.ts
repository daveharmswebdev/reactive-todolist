import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatInputModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MdButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MdButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule
  ]
})
export class MaterialModule { }
