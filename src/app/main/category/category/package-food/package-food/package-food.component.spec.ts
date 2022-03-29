import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageFoodComponent } from './package-food.component';

describe('PackageFoodComponent', () => {
  let component: PackageFoodComponent;
  let fixture: ComponentFixture<PackageFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
