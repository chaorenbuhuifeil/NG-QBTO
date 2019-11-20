import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgadminRoutingModule } from './ngadmin-routing.module';
import { IndexComponent } from './index/index.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    NgadminRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
  ]
})
export class NgadminModule { }
