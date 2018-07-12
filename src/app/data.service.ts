import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = ['ford', 'chevrolet', 'citroen', 'volkswagen'];

  myData() {
    return 'This is my data!';
  }

}
