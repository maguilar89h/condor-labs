import { Component, OnInit,Input, AfterViewInit  } from '@angular/core';
import * as c3 from 'c3';
import { RecordDataService } from '../../services/record-data.service';

@Component({
  selector: 'app-average-response-time-per-day',
  templateUrl: './average-response-time-per-day.component.html',
  styleUrls: ['./average-response-time-per-day.component.css']
})
export class AverageResponseTimePerDayComponent implements OnInit {

  constructor(public recorDataService: RecordDataService) { }

  ngOnInit() {
    this.getValues();
  }

  public totalAverageResponseTime = 0;
  public chartD;


  getValues() {
    this.recorDataService.dataAsObservable().subscribe(
      (res) => {
        if (res && res.length > 0) {
          let sumatory = 0;
          res.forEach(each => {
            sumatory += (new Date(each.dt_end_log).getTime() - new Date(each.dt_Start_Log).getTime());
          });
          this.totalAverageResponseTime = sumatory / res.length;
          this.ngAfterViewInit();
        }
      },
      (err) => { console.log('error') }
    )
  }


  ngAfterViewInit() {
    let chartD = c3.generate({  bindto: '#chartD',
    data: {
        columns: [
            ['Average Response Time per Day', this.totalAverageResponseTime],
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
