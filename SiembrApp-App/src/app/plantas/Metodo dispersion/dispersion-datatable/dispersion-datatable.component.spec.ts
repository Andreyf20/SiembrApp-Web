import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispersionDatatableComponent } from './dispersion-datatable.component';

describe('DispersionDatatableComponent', () => {
  let component: DispersionDatatableComponent;
  let fixture: ComponentFixture<DispersionDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispersionDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispersionDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
