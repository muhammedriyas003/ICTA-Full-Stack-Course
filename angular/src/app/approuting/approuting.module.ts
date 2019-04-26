import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from '../components/product-add/product-add.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { Routes,RouterModule } from '@angular/router';

const routes : Routes = [
  { path :'',component:ProductAddComponent},
  { path :'add',component:ProductListComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class ApproutingModule { }
