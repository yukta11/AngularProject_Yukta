import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenItemComponent } from './frozen-item.component';

describe('FrozenItemComponent', () => {
  let component: FrozenItemComponent;
  let fixture: ComponentFixture<FrozenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrozenItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
