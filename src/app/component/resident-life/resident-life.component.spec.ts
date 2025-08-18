import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentLifeComponent } from './resident-life.component';

describe('ResidentLifeComponent', () => {
  let component: ResidentLifeComponent;
  let fixture: ComponentFixture<ResidentLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentLifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
