import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecordData } from '../models/record-data';
import { DatePipe } from '@angular/common';

@Injectable()
export class RecordDataService {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  public getData(modelStartDate: any, modelEndDate: any,stateCode: string, ​cd_profession: string):Observable<RecordData[]>{
    let params = new HttpParams();
    if(modelStartDate && modelStartDate != null){
      params = params.set('startdate', this.datePipe.transform(new Date(modelStartDate.year, modelStartDate.month, modelStartDate.day), 'MM-dd-yyyy'));
    }
    if(modelEndDate && modelEndDate != null){
      params = params.set('enddate', this.datePipe.transform(new Date(modelEndDate.year, modelEndDate.month, modelEndDate.day), 'MM-dd-yyyy'));
    }
    if(stateCode && stateCode != ''){
      console.log("stateCode==>"+stateCode);
      params = params.set('stateCode', stateCode);
    }
    if(​cd_profession && ​cd_profession!=null){
      console.log("​cd_profession==>"+​cd_profession);
      params = params.set('​cd_profession', ​cd_profession);
    }
    console.log("params==>"+params);
    return this.http.get<RecordData[]>('https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData', {params: params});
  }

}
