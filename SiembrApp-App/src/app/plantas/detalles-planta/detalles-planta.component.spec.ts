import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPlantaComponent } from './detalles-planta.component';

describe('DetallesPlantaComponent', () => {
  let component: DetallesPlantaComponent;
  let fixture: ComponentFixture<DetallesPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
