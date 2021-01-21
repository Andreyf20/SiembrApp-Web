import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenologiasDatatableComponent } from './fenologias-datatable.component';

describe('FenologiasDatatableComponent', () => {
  let component: FenologiasDatatableComponent;
  let fixture: ComponentFixture<FenologiasDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FenologiasDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FenologiasDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
