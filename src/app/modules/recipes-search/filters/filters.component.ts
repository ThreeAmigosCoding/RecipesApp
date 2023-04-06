import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepSliderValue: number = 120;
  glutenIntolerance: boolean = false;

  //TODO Fix range slider for calories.
  minValue = 0;
  maxValue = 100;
  sliderValue = {min: 20, max: 80};

}

