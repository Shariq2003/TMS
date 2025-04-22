import { Component } from '@angular/core';
import {  eyeIcon, pencilIcon, trashIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-kendo-buttons',
  templateUrl: './kendo-buttons.component.html',
  styleUrl: './kendo-buttons.component.scss'
})
export class KendoButtonsComponent {
  public svgedit= pencilIcon;
  public svgview=eyeIcon;
  public svgdelete= trashIcon;

}
