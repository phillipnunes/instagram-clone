import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  http: Http;
  images: object[] = [];
  total: number = 0;
  client_id: string = '';
  query: string = '';
  searchTerm: string = 'office'; //Just to start with some result in screen

  constructor(httpRequest: Http) {

    this.http = httpRequest;

    this.requestAPI(this.searchTerm);
  }

  search(value) {
    this.requestAPI(value);
  }

  requestAPI(value){

    this.searchTerm = value;
    this.client_id = 'YOUR_ACCESS_KEY';
    this.query = `https://api.unsplash.com/search/photos/?page=1&query=${ value }&client_id=${ this.client_id }`;

    this.http.get(this.query)
        .map( res => res.json() )
        .subscribe( images => {
          this.images = images.results ;
          this.total = images.total;
        });
  }
}
