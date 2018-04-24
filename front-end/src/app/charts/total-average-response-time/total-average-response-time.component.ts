import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-total-average-response-time',
  templateUrl: './total-average-response-time.component.html',
  styleUrls: ['./total-average-response-time.component.css']
})
export class TotalAverageResponseTimeComponent implements OnInit {

  public chart;
  constructor() { }

  ngOnInit() {
    this.ngAfterViewInit();
    console.log("charttotalAverageResponseTime>>>>>>>>>>>>>");
  }
  
  ngAfterViewInit() {
    this.chart = c3.generate({
      data: {
          columns: [
              ['Average Response Time per Day', 40,45,12,34,122],
          ],
          type: 'bar'
      },
      bar: {
          width: {
              ratio: 0.2 
          }
      }
  });
}


}
