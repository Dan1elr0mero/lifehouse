import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingtestimonialComponent } from './landingtestimonial.component';

describe('LandingtestimonialComponent', () => {
  let component: LandingtestimonialComponent;
  let fixture: ComponentFixture<LandingtestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingtestimonialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingtestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
