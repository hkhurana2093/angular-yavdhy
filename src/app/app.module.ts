import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {Routes,RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
//import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { MetabaseComponent } from './main/metabase/metabase.component';
import { GarphComponent } from './main/garph/garph.component';
import { MapComponent } from './main/map/map.component';
import { HttpModule } from '@angular/http';
import { SecondmapComponent } from './main/secondmap/secondmap.component';


// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);



const appRoutes:Routes = [
  {
      path: '',redirectTo: '/graph',pathMatch: 'full'},
      { path: 'graph',component: GarphComponent,data: { title: 'graph' } },
      { path: 'metabase', component: MetabaseComponent,data: { title: 'metabase' } },
      { path: 'map', component: MapComponent,data: { title: 'metabase' } },
      { path: 'secondmap', component: SecondmapComponent,data: { title: 'SecondmapComponent' } }
      
];




@NgModule({
  declarations: [
    AppComponent,
    MetabaseComponent,
    GarphComponent,
    MapComponent,
    SecondmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FusionChartsModule,
    ChartsModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0McczTB0q4J-6XWlu9FAjncjXyVO8i5k'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }