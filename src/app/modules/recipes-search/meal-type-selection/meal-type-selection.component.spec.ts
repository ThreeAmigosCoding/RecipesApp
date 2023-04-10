import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTypeSelectionComponent } from './meal-type-selection.component';

describe('MealTypeSelectionComponent', () => {
  let component: MealTypeSelectionComponent;
  let fixture: ComponentFixture<MealTypeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealTypeSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
