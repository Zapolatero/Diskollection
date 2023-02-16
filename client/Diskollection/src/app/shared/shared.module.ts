import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    CommonModule,
    MaterialDesignModule
  ]
})
export class SharedModule { }