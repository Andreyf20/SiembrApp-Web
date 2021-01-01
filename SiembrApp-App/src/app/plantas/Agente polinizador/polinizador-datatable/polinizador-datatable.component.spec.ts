import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolinizadorDatatableComponent } from './polinizador-datatable.component';

describe('PolinizadorDatatableComponent', () => {
  let component: PolinizadorDatatableComponent;
  let fixture: ComponentFixture<PolinizadorDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolinizadorDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolinizadorDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
