import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionToggleComponent } from './solution-toggle.component';

describe('SolutionToggleComponent', () => {
  let component: SolutionToggleComponent;
  let fixture: ComponentFixture<SolutionToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
