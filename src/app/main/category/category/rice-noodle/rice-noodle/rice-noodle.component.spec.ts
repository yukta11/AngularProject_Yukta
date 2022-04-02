import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceNoodleComponent } from './rice-noodle.component';

describe('RiceNoodleComponent', () => {
  let component: RiceNoodleComponent;
  let fixture: ComponentFixture<RiceNoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiceNoodleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceNoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
