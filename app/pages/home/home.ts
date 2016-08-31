import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  items;

  constructor(public navCtrl: NavController, private http: Http) {
      this.http.get("http://api.randomuser.me/?results=100").subscribe (data =>{
          this.items = JSON.parse(data['_body']).results;
          console.log("Got results");
      }, error =>{
          console.log(error);
      })
  }

  itemClicked(event, item) {
      console.log(item.title);
  }

  removeItem (item) {
      this.items.splice(this.items.indexOf(item), 1);
      console.log("Later Bitch");
  }
}
