import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  stage = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
