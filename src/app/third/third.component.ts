import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  y =60;
  constructor() { }

  ngOnInit() {
    
  }

  sum(x:number):number{
    return 70 + x
  }

  responseToEvent():void{
    alert('Calling')
  }

  inc(){
    // this.y = this.y + 1;
    this.y++;
  }

}
