import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeComponent } from './hike.component';

describe('HikeComponent', () => {
  let component: HikeComponent;
  let fixture: ComponentFixture<HikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HikeComponent]
    });
    fixture = TestBed.createComponent(HikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
