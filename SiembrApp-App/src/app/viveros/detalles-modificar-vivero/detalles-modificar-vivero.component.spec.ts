import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesModificarViveroComponent } from './detalles-modificar-vivero.component';

describe('DetallesModificarViveroComponent', () => {
  let component: DetallesModificarViveroComponent;
  let fixture: ComponentFixture<DetallesModificarViveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesModificarViveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesModificarViveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
