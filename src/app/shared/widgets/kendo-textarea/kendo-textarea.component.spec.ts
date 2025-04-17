import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTextareaComponent } from './kendo-textarea.component';

describe('KendoTextareaComponent', () => {
  let component: KendoTextareaComponent;
  let fixture: ComponentFixture<KendoTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KendoTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
