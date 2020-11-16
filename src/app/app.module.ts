import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';

import 'froala-editor/js/plugins.pkgd.min.js';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
// import { FroalaComponent } from "./admin/froala.component"; 
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// import { FroalaEditorModule } from '../editor/index';
// import { FroalaViewModule } from '../view/index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PublicComponent
    // FroalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, FormsModule, ReactiveFormsModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
