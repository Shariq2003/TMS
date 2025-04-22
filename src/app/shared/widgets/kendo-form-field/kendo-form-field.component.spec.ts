import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoFormFieldComponent } from './kendo-form-field.component';

describe('FormFieldComponent', () => {
  let component: KendoFormFieldComponent;
  let fixture: ComponentFixture<KendoFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KendoFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KendoFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
