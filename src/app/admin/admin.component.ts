import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  public imgOptions: Object = {
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    events: {
      "contentChanged": () => {
      }
    }
  }

    // Sample 1 models
    public titleOptions: Object = {
      placeholderText: 'Edit Your Content Here!',
      charCounterCount: false,
      toolbarInline: true,
      events: {
        "initialized": () => {
          console.log('initialized');
        },
        "contentChanged": () => {
          console.log("content changed");
        }
      }
    }
    // public myTitle: string;
  
  
    // Sample 2 model
    public content: string = '<span>My Document\'s Title</span>';
  

}
