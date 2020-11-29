import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from "../httpservice.service";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  public blogs = [1,2,3,4,5,6,7,8,9,0,6,4,36,45,3,2,6];


}
