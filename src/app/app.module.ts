import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import {VendorListComponent} from './vendor/vendor-list/vendor-list.component';
import {VendorDetailComponent} from './vendor/vendor-detail/vendor-detail.component';
import {VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import {VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { MenuComponent } from './system/menu/menu.component';
import { MenuItemComponent } from './system/menu-item/menu-item.component';
import { BooldispPipe } from './system/booldisp.pipe';
import { SearchPipe } from './system/search.pipe';
import { ProductComponent } from './product/product.component';
import { PrductComponent } from './product/prduct/prduct.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { SortPipeComponent } from './system/sort-pipe/sort-pipe.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineDetailComponent } from './requestline/requestline-detail/requestline-detail.component';
import { SortPipe } from './system/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorListComponent, VendorDetailComponent, VendorCreateComponent, VendorEditComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    MenuComponent,
    MenuItemComponent,
    BooldispPipe,
    SearchPipe,
    ProductComponent,
    PrductComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    SortPipeComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestlineListComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    RequestlineDetailComponent,
    SortPipe
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  //@NgModule({
  //declarations: [
    //AppComponent,
    //VendorsListComponent,
    //VendorsDetailComponent,
    //VendorsCreateComponent,
    //VendorsEditComponent,
    //HomeComponent,
    //AboutComponent,
    //MenuComponent,
    //MenuItemComponent,
    //BooldispPipe,
    //SearchPipe
    //],
    


