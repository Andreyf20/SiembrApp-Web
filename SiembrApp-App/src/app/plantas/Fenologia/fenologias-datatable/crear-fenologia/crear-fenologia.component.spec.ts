import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFenologiaComponent } from './crear-fenologia.component';

describe('CrearFenologiaComponent', () => {
  let component: CrearFenologiaComponent;
  let fixture: ComponentFixture<CrearFenologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFenologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFenologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
