import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViverosDatatableComponent } from './viveros-datatable.component';

describe('ViverosDatatableComponent', () => {
  let component: ViverosDatatableComponent;
  let fixture: ComponentFixture<ViverosDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViverosDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViverosDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
