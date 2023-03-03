import { Component } from '@angular/core';

@Component({
  selector: 'smartlis-app',
  templateUrl: './smartlis-app.component.html',
  styles: [`
  .container {
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgb(21, 33, 88);
    min-height: 100vh;
  }
  .container-fixed {
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 4vh;
    width: 100%;
    background-color: rgb(4, 12, 49);
}
  .copyright-container {
    position: relative;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-left: 20px; margin-right: 20px;
    font-size: x-small;
    text-align: center;
    color: rgb(255, 255, 255);
}
p{margin: 0px;}
  `]
})
export class SmartlisAppComponent {
  title = 'SmartLIS';
}
