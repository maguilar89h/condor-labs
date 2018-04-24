import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecordData } from '../models/record-data';
import { DatePipe } from '@angular/common';

@Injectable()
export class RecordDataService {
  public recordDataArray: any[];

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  


  getData():Observable<RecordData[]>{
    let params = new HttpParams();
    return this.http.get<RecordData[]>('https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData', {params: params});
  }

  getDat(): Observable<any> {
     return this.http.get('https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData');
  }
  getrecordDataArray(){
    const recordDataArray =  JSON.parse(localStorage.getItem('recordDataArray'));
    if(recordDataArray != undefined){
      this.recordDataArray = recordDataArray;
    }

    return recordDataArray;
  }

  getDatas(modelStartDate: any, modelEndDate: any,stateCode: string): Observable<any>{
    let params = new HttpParams();
    if(modelStartDate && modelStartDate != null){
      params = params.set('startdate', this.datePipe.transform(new Date(modelStartDate.year, modelStartDate.month, modelStartDate.day), 'MM-dd-yyyy'));
      console.log("startdate====>"+params.get('startdate'));
    }
    if(modelEndDate && modelEndDate != null){
      console.log("enddate====>"+params.get('enddate'));
      params = params.set('enddate', this.datePipe.transform(new Date(modelEndDate.year, modelEndDate.month, modelEndDate.day), 'MM-dd-yyyy'));
    }
    if(stateCode && stateCode != ''){
      params = params.set('state', stateCode);
    }

    console.log("startdate====>"+params.get('startdate'));
 
    return this.http.get('https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData', {params:params})

  }
}
