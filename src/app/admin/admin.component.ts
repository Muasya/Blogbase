import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpserviceService } from "../httpservice.service";
// import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  // html file equivalent
  public content: string = '';

  // Editor methods
  form = new FormGroup({
    formModel: new FormControl('Hello World', Validators.minLength(2)),
  });

  get formModel(): any { return this.form.get('formModel'); }

  // on save
  onSubmit(): void {
    console.log(this.form.value);
  }

  // setting the contends of the editor
  setValue() { this.form.setValue({formModel: 'Default text'}); }

  // publishing the editors contend online
  publish(){

  }
  

}
