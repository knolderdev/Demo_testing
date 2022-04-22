import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addition = 0;
  show = false;
  constructor() { }

  ngOnInit(): void {
    this.add(2, 4);
  }

  add(a: number, b: number){
    this.addition = a + b
  }

  sub(a: number, b: number){
    return a - b
  }

  toggleBoolean(){
    this.show = !this.show
  }

}
