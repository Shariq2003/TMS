import { StatusColorDirective } from './status-color.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('StatusColorDirective', () => {
  it('should create an instance', () => {
 
    const mockElementRef = new ElementRef(document.createElement('div'));


    const mockRenderer2 = {
      setStyle: () => {}
    } as unknown as Renderer2;

   
    const directive = new StatusColorDirective(mockElementRef, mockRenderer2);

    expect(directive).toBeTruthy();
  });
});
