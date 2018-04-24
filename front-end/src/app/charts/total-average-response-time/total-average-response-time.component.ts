import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-total-average-response-time',
  templateUrl: './total-average-response-time.component.html',
  styleUrls: ['./total-average-response-time.component.css']
})
export class TotalAverageResponseTimeComponent implements OnInit {

  public chart;
  public line;
  constructor() { }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
        let chart = c3.generate({  bindto: '#chart',
        data: {
            columns: [
                ['Total Average Response Time', 40],
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
