import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTopicsComponent } from './explore-topics.component';

describe('ExploreTopicsComponent', () => {
  let component: ExploreTopicsComponent;
  let fixture: ComponentFixture<ExploreTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreTopicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
