import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHikesComponent } from './all-hikes.component';

describe('AllHikesComponent', () => {
  let component: AllHikesComponent;
  let fixture: ComponentFixture<AllHikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHikesComponent]
    });
    fixture = TestBed.createComponent(AllHikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
