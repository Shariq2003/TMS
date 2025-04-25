import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { imageIcon, SVGIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-kendo-daterange',
  templateUrl: './kendo-daterange.component.html',
  styleUrls: ['./kendo-daterange.component.scss'],
})
export class KendoDaterangeComponent implements OnInit {
  @Input() startLabel = 'Start Date';
  @Input() endLabel = 'End Date';
  @Input() startPlaceholder = 'DD-MM-YYYY';
  @Input() endPlaceholder = 'DD-MM-YYYY';
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Output() dateRangeChange = new EventEmitter<{
    startDate: Date | null;
    endDate: Date | null;
  }>();

  imageSVG: SVGIcon = imageIcon;
  range: { startDate: Date | null; endDate: Date | null } = {
    startDate: null,
    endDate: null,
  };

  ngOnInit() {
    this.range = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.emitRange();
  }

  ngOnChanges() {
    this.emitRange();
  }

  emitRange() {
    this.dateRangeChange.emit(this.range);
  }
  onStartDateChange(date: Date): void {
    this.range.startDate = date;
    this.emitRange();
  }

  onEndDateChange(date: Date): void {
    this.range.endDate = date;
    this.emitRange();
  }
}
