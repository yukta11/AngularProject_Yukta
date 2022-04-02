import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleMomoComponent } from './dalle-momo.component';

describe('DalleMomoComponent', () => {
  let component: DalleMomoComponent;
  let fixture: ComponentFixture<DalleMomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalleMomoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DalleMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
