import { Component, OnInit } from '@angular/core';
import { RecordDataService } from '../services/record-data.service';
import { RecordData } from '../models/record-data';


@Component({
  selector: 'app-record-data',
  templateUrl: './record-data.component.html',
  styleUrls: ['./record-data.component.css']
})
export class RecordDataComponent implements OnInit {

  modelStartDate: any;
  modelEndDate: any;
  stateCode: string = '';
  ​cd_profession: string = '';


  stateCodeArray = ['FL','OH','GA','LA'];

  public recordDataArray: RecordData[];

  constructor(public recorDataService: RecordDataService) { }

  ngOnInit() {
  }

  public onSubmit(){
    console.log("recordDataArray==>>"+this.recordDataArray);
    this.recorDataService.getData(this.modelStartDate, this.modelEndDate, this.stateCode,this.​cd_profession
  ).subscribe(result => { this.recordDataArray = result; })
  }

}
