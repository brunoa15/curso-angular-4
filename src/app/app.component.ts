import { Component } from '@angular/core';
import { DataService } from "./data.service";
import { trigger,state,style,transition,animate,keyframes } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation',[
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 1,
          offset: .5
        }),
        style({
          opacity: 0,
          offset: 1
        }),
      ])))
    ]),

  ]
})
export class AppComponent {
  title = 'app';
  prop:string = '';
  state: string = 'small'

  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    console.log(this.dataService.cars);
    this.prop = this.dataService.myData();
  }

  animateMe() {
    if (this.state === 'small') {
      this.state = 'large';
    }
    else {
      this.state = 'small';
    }
  }

}
