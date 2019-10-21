import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StandingYearWinnerComponent } from './components/standing-year-winner/standing-year-winner.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component'

@NgModule({
  declarations: [
    AppComponent,
    StandingYearWinnerComponent,
    SeasonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule
  ],
  entryComponents: [
    SeasonDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
