import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMetodoDispersionComponent } from './crear-metodo-dispersion.component';

describe('CrearMetodoDispersionComponent', () => {
  let component: CrearMetodoDispersionComponent;
  let fixture: ComponentFixture<CrearMetodoDispersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMetodoDispersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMetodoDispersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
