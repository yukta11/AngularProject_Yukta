import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GourmentComponent } from './gourment.component';

describe('GourmentComponent', () => {
  let component: GourmentComponent;
  let fixture: ComponentFixture<GourmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GourmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GourmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
