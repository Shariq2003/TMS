import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoCardComponent } from './kendo-card.component';

describe('KendoCardComponent', () => {
  let component: KendoCardComponent;
  let fixture: ComponentFixture<KendoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KendoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
