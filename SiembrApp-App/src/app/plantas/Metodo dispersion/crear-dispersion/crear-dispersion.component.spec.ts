import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDispersionComponent } from './crear-dispersion.component';

describe('CrearDispersionComponent', () => {
  let component: CrearDispersionComponent;
  let fixture: ComponentFixture<CrearDispersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDispersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDispersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
