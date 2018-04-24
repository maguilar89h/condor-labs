import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-average-response-time-per-day',
  templateUrl: './average-response-time-per-day.component.html',
  styleUrls: ['./average-response-time-per-day.component.css']
})
export class AverageResponseTimePerDayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chartD;


  ngAfterViewInit() {
    let chartD = c3.generate({  bindto: '#chartD',
    data: {
        columns: [
            ['Average Response Time per Day', 40],
        ],
        type: ''
    },
    bar: {
        width: {
            ratio: 0.2 
        }
    }
    });
}

}
