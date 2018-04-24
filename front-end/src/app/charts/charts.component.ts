import { Component, OnInit,Input } from '@angular/core';
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
      console.log(recorDataService.getrecordDataArray());
   }

  totalAverageResponseTime = this.recorDataService.getDat.length;

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    if(this.recorDataService && this.recorDataService.getDat.length>0){
      let sumatory = 0;
      this.recorDataService.getDat().forEach(each =>{
          sumatory+=(new Date(each.dt_end_log).getTime()-new Date(each.dt_Start_Log).getTime());
      });
      this.totalAverageResponseTime = sumatory/this.recorDataService.getDat.length;
    }
  }

  ngAfterViewInit() {
    this.chart = c3.generate({
      data: {
          columns: [
              ['Average Response Time per Day', 20,12,45,78],
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
