import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occur',
  templateUrl: './occur.component.html',
  styleUrls: ['./occur.component.css']
})
export class OccurComponent implements OnInit {
  msg:string="Welcome Pritish!!!";
  constructor() { }
  
  ngOnInit(): void {
  }

}
