import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective {

  @Input('appStatusColor') status!: string ;
  constructor(private el: ElementRef , private renderer: Renderer2) { }

  ngOnChanges() {
    let color = '';
    switch(this.status) {
      case 'In Progress':
        color = 'blue';
        break;
        case 'Pending':
        color = 'red';
        break;
      case 'Done':
        color = 'green';
        break;
      default:
        color = 'black';

      }
      this.renderer.setStyle(this.el.nativeElement, 'color', color);
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
}
