import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-total-requests-per-machine',
  templateUrl: './total-requests-per-machine.component.html',
  styleUrls: ['./total-requests-per-machine.component.css']
})
export class TotalRequestsPerMachineComponent implements OnInit {

  public chartPD;
  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    let chartPD = c3.generate({  bindto: '#chartPD',
    data: {
        columns: [
            ['Total Requests per Machine', 40],
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
