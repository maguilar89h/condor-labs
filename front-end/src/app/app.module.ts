import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { RecordDataComponent } from './record-data/record-data.component';
import { RecordDataService } from './services/record-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { TotalAverageResponseTimeComponent } from './charts/total-average-response-time/total-average-response-time.component';
import { AverageResponseTimePerDayComponent } from './charts/average-response-time-per-day/average-response-time-per-day.component';
import { TotalRequestsPerMachineComponent } from './charts/total-requests-per-machine/total-requests-per-machine.component';




@NgModule({
  declarations: [
    AppComponent,
    RecordDataComponent,
    ChartsComponent,
    TotalAverageResponseTimeComponent,
    AverageResponseTimePerDayComponent,
    TotalRequestsPerMachineComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [RecordDataService, HttpClientModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
