import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgentePolinizadorComponent } from './crear-agente-polinizador.component';

describe('CrearAgentePolinizadorComponent', () => {
  let component: CrearAgentePolinizadorComponent;
  let fixture: ComponentFixture<CrearAgentePolinizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAgentePolinizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAgentePolinizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
