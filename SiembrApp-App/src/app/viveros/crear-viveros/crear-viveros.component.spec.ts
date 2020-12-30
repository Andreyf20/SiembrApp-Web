import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViverosComponent } from './crear-viveros.component';

describe('CrearViverosComponent', () => {
  let component: CrearViverosComponent;
  let fixture: ComponentFixture<CrearViverosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViverosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearViverosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
