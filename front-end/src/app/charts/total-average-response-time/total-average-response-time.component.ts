import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { RecordDataService } from '../../services/record-data.service';

@Component({
  selector: 'app-total-average-response-time',
  templateUrl: './total-average-response-time.component.html',
  styleUrls: ['./total-average-response-time.component.css']
})
export class TotalAverageResponseTimeComponent implements OnInit {

  public chart;
  public line;
  constructor(public recorDataService: RecordDataService) { }

  public totalAverageResponseTime = 0;

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.recorDataService.dataAsObservable().subscribe(
      (res) => {
        if (res && res.length > 0) {
          let sumatory = 0;
          res.forEach(each => {
            sumatory += (new Date(each.dt_end_log).getTime() - new Date(each.dt_Start_Log).getTime());
          });
          this.totalAverageResponseTime = sumatory;
          this.ngAfterViewInit();
        }
      },
      (err) => { console.log('error') }
    )
  }

  ngAfterViewInit() {
        let chart = c3.generate({  bindto: '#chart',
        data: {
            columns: [
                ['Total Average Response Time', this.totalAverageResponseTime],
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
