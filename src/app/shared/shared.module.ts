import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
