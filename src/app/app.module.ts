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


@NgModule({
  declarations: [
    AppComponent,
    RecordDataComponent
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
