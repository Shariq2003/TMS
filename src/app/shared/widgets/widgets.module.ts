import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
// import { KendoFormFieldComponent } from './kendo-form-field/kendo-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormFieldModule, InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KendoDropdownComponent } from './kendo-dropdown/kendo-dropdown.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { KendoTextareaComponent } from './kendo-textarea/kendo-textarea.component';
import { KendoCardComponent } from './kendo-card/kendo-card.component';
import { KendoButtonComponent } from './kendo-button/kendo-button.component';
import { RouterModule } from '@angular/router';
import { KendoInputComponent } from './kendo-input/kendo-input.component';
import { KendoLabelComponent } from './kendo-label/kendo-label.component';
import { KendoErrorComponent } from './kendo-error/kendo-error.component';
import { KendoDaterangeComponent } from './kendo-daterange/kendo-daterange.component';
import { StatusColorDirective } from '../../tasks/directives/status-color.directive';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { KendoLoaderComponent } from './kendo-loader/kendo-loader.component';


@NgModule({
  declarations: [
    KendoGridComponent,
    KendoDaterangeComponent,
    KendoDropdownComponent,
    KendoTextareaComponent,
    KendoTextareaComponent,
    KendoCardComponent,
    KendoButtonComponent,
    KendoInputComponent,
    KendoLabelComponent,
    KendoErrorComponent,
    StatusColorDirective,
    KendoLoaderComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    ReactiveFormsModule,
    LabelModule,
    InputsModule,
    FormFieldModule,
    DateInputsModule,
    DropDownsModule,
    LabelModule,
    RouterModule,
    IndicatorsModule,
  ],
  exports: [
    KendoGridComponent,
    KendoDaterangeComponent,
    KendoDropdownComponent,
    KendoTextareaComponent,
    KendoCardComponent,
    KendoButtonComponent,
    KendoInputComponent,
    KendoLabelComponent,
    KendoErrorComponent,
    KendoLoaderComponent,
  ],
})
export class WidgetsModule {}
 