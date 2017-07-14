import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-sony',
  templateUrl: './sony.component.html',
  styleUrls: ['./sony.component.css']
})
export class SonyComponent implements OnInit {

  buttons = [ { button : 'fa-cog', api_link : '/Input', color : 'black' },
              { button : 'fa-microphone', api_link : '/Voice' , color : 'black' },
              { button : 'fa-power-off', api_link : '/Poweron', color : 'green' },
              // { button : 'OFF', api_link : '/Poweroff' , color : 'red'},
              { button : 'fa-volume-up', api_link : '/VolumeUp', color : 'black' },
              { button : 'fa-volume-down', api_link : '/VolumeDown', color : 'black' }];

  constructor( private http: Http) { }

  ngOnInit() {
  }


onClick(cmd : string) {

   const header = new Headers();
    const url = 'http://192.168.1.251:4100/TV/sony' + cmd;

   this.http.get(url).subscribe(
     (res: Response) => {
       const result = res.text();
       console.log(result);
     }
   );
}


}
