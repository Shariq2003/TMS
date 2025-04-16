import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormFieldComponent } from './form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormFieldModule, InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KendoDropdownComponent } from './kendo-dropdown/kendo-dropdown.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  declarations: [KendoGridComponent, FormFieldComponent, KendoDropdownComponent],
  imports: [CommonModule, GridModule , ReactiveFormsModule , LabelModule , InputsModule , FormFieldModule , DateInputsModule ,DropDownsModule , LabelModule],
  exports: [KendoGridComponent , FormFieldComponent , KendoDropdownComponent],
})
export class WidgetsModule {}
