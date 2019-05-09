import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 30.733315;
  lng: number = 76.779419;
  places:any[]=[]; 
  iconUrl:any;
  googleicons:any;

  // Chandigarh  30.733315 ,76.779419
  // Mohali 30.704649,76.717873
  // New Delhi 28.613939 , 77.209023

  constructor(
    private http: Http
  ) {
        this.getJSON();
  }


  ngOnInit() {
    this.iconUrl="assets/marker.png"
  }
getJSON() {
this.http.get("assets/location.json").subscribe(response => {
          let temp = response.json();
          this.places = temp.locations;
          console.log("places", this.places);
        })
  }

  labelOptions = {
    color: '#CC0000',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'label 1',
    }


    private icon = {
      url: 'assets/marker1.png', 
      scaledSize: {
        height: 50,
        width: 30
      }
    };
}
