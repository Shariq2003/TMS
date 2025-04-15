import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TMS';
  public dynamicGridData = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages'
      }
    },
    {
      ProductID: 2,
      ProductName: 'Chang',
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages'
      }
    }
  ];
}
