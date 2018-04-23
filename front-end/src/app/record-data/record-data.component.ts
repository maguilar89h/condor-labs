import { Component, OnInit } from '@angular/core';
import { RecordDataService } from '../services/record-data.service';
import { RecordData } from '../models/record-data';


@Component({
  selector: 'app-record-data',
  templateUrl: './record-data.component.html',
  styleUrls: ['./record-data.component.css']
})
export class RecordDataComponent implements OnInit {

  public modelStartDate: any;
  public modelEndDate: any;
  public stateCode: string = '';
  public ​cd_profession: string = '';
  public pro_cde: number;
  public id_license:number = 0;
  public dt_end:Date;
  public ds_compl_status_returned:string = '';
  public id_client_nbr:string = '';
  public cd_environment:string = '';
  ​public cd_machine:string = '';

  stateCodeArray = ['FL','OH','GA','LA'];

  public recordDataArray: RecordData[];

  constructor(public recorDataService: RecordDataService) { }

  ngOnInit() {
   
  }

  public onSubmit(){
    console.log(this.modelStartDate);

       this.recorDataService.getDatas(this.modelStartDate, this.modelEndDate,
        this.stateCode).subscribe(
         (response) => {
           console.log(response);
           this.recordDataArray = response;
           localStorage.setItem('recordDataArray', JSON.stringify(this.recordDataArray));
           
         },
         (error) => {
           console.log(error);
         }
        )
    
  }
}