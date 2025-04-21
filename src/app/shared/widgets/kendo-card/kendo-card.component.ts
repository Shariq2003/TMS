import { Component, Input , OnInit } from '@angular/core';


@Component({
  selector: 'app-kendo-card',
  templateUrl: './kendo-card.component.html',
  styleUrl: './kendo-card.component.scss'
})

export class KendoCardComponent {

  @Input () cardData : any ;
  public fields : {key: string , value : any }[] = [] ;
  ngOnInit() {
    if(this.cardData){
      this.fields = this.extractFields(this.cardData) ;
    }
  
  }

  extractFields(obj: any): {key: string , value : any }[] {
    const fields: {key: string , value : any }[] = [] ;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        fields.push({key, value: obj[key]});
      }
    }
    return fields;  
  
  }
  formatKey(key: string): string {
    const result = key.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}
