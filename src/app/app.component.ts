import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-mat-hot';
  instance1 = {
    startRows: 50,
    colHeaders: true,
    stretchH: 'all',
  };
  instance2 = {
    startRows: 50,
    colHeaders: true,
    stretchH: 'all',
    manualColumnResize: true,
  };
}
