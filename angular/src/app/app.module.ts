import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { HeaderComponent } from './components/header/header.component';
import { ApproutingModule } from './approuting/approuting.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
