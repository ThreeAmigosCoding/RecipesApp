import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesSelectionComponent } from './cuisines-selection.component';

describe('CuisinesSelectionComponent', () => {
  let component: CuisinesSelectionComponent;
  let fixture: ComponentFixture<CuisinesSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisinesSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisinesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
