import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { RecordDataService } from '../services/record-data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public chart;
  constructor(public recorDataService: RecordDataService) {
  }

  totalFl = 0;
  totalOh = 0;
  totalGa = 0;
  totalLa = 0;

  ngOnInit() {
    this.getValues();

  }

  getValues() {
    this.recorDataService.dataAsObservable().subscribe(
      (res) => {
        this.totalFl = 0;
        this.totalOh = 0;
        this.totalGa = 0;
        this.totalLa = 0;
        if (res && res.length > 0) {
          res.forEach(each => {
            if(each.cd_cebroker_state=="FL"){
              this.totalFl++;
            }else if(each.cd_cebroker_state=="OH"){
              this.totalOh++;
            }else if(each.cd_cebroker_state=="GA"){
              this.totalGa++;
            }else{
              this.totalLa++;
            }
          });
          this.ngAfterViewInit();
        }
      },
      (err) => { console.log('error') }
    )
  }

  ngAfterViewInit() {
    this.chart = c3.generate({
      bindto: '#charts',
      data: {
        columns: [
          ['FL',this.totalFl],
          ['OH',this.totalOh],
          ['GA',this.totalGa],
          ['LA',this.totalLa],
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5
        }
      }
    });
  }
}
