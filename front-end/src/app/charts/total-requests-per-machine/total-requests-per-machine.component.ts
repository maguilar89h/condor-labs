import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { map } from 'rxjs/operators';
import { RecordDataService } from '../../services/record-data.service';

@Component({
  selector: 'app-total-requests-per-machine',
  templateUrl: './total-requests-per-machine.component.html',
  styleUrls: ['./total-requests-per-machine.component.css']
})
export class TotalRequestsPerMachineComponent implements OnInit {

  public chartPD;
  constructor(public recorDataService: RecordDataService) { }

  ngOnInit() {
  }

  getValuesList(){
    let mapMachine = new Map<string,number>();

  }


  getValues() {
    this.recorDataService.dataAsObservable().subscribe(
      (res) => {
        if (res && res.length > 0) {
          let sumatory = 0;
          res.forEach(each => {
            sumatory += (new Date(each.dt_end_log).getTime() - new Date(each.dt_Start_Log).getTime());
          });
          
          this.ngAfterViewInit();
        }
      },
      (err) => { console.log('error') }
    )
  }

  public barChartLabels:string[] = new Array<string>();
  public data:number[] = new Array<number>();



  ngAfterViewInit() {
    let chartPD = c3.generate({  bindto: '#chartPD',
    data: {
        columns: [
            [this.barChartLabels, this.data],
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
