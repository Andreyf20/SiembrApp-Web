import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasDatatableComponent } from './plantas-datatable.component';

describe('PlantasDatatableComponent', () => {
  let component: PlantasDatatableComponent;
  let fixture: ComponentFixture<PlantasDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantasDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
