import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasDatatableComponent } from './familias-datatable.component';

describe('FamiliasDatatableComponent', () => {
  let component: FamiliasDatatableComponent;
  let fixture: ComponentFixture<FamiliasDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliasDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliasDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
