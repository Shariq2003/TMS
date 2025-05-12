import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoLoaderComponent } from './kendo-loader.component';

describe('KendoLoaderComponent', () => {
  let component: KendoLoaderComponent;
  let fixture: ComponentFixture<KendoLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KendoLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KendoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
