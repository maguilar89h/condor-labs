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

  totalAverageResponseTime = 10;

  ngOnInit() {
    console.log("recorDataService====>"+this.recorDataService.getDat);  
    this.calculate();
    this.ngAfterViewInit();
  }

  calculate(){
    if(this.recorDataService && this.recorDataService.getDat.length>0){
      console.log("recorDataService====>"+this.recorDataService.getDat);  
      let total = this.recorDataService.getDat.length;
      let sumatory = 0;
  
      this.recorDataService.getDat().forEach(each =>{
          sumatory+=(new Date(each.dt_end_log).getTime()-new Date(each.dt_Start_Log).getTime());
      });
      this.totalAverageResponseTime = sumatory/total;
    }
  }

  ngAfterViewInit() {
    this.chart = c3.generate({
      data: {
          columns: [
              ['Average Response Time per Day', 40],
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
