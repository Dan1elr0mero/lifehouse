import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingInstalationsComponent } from './landing-instalations.component';

describe('LandingInstalationsComponent', () => {
  let component: LandingInstalationsComponent;
  let fixture: ComponentFixture<LandingInstalationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingInstalationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingInstalationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
