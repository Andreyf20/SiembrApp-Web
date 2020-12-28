import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViverosComponent } from './viveros.component';

describe('ViverosComponent', () => {
  let component: ViverosComponent;
  let fixture: ComponentFixture<ViverosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViverosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViverosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
