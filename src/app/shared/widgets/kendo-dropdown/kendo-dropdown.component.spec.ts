import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDropdownComponent } from './kendo-dropdown.component';

describe('KendoDropdownComponent', () => {
  let component: KendoDropdownComponent;
  let fixture: ComponentFixture<KendoDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KendoDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
