import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsMenuComponent } from './ingredients-menu.component';

describe('IngredientsMenuComponent', () => {
  let component: IngredientsMenuComponent;
  let fixture: ComponentFixture<IngredientsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
