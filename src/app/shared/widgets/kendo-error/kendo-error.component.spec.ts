import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoErrorComponent } from './kendo-error.component';

describe('KendoErrorComponent', () => {
  let component: KendoErrorComponent;
  let fixture: ComponentFixture<KendoErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KendoErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
