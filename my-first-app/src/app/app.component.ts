import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userId = "avictoria";
Passwd = "C$r1t0s"; 
allowNewServer = false;
serverCreationStatus= "No server created!";
serverName= 'ServerTest';
serverCreated = false;
servers=['Server 1', 'Server 2'];

constructor() {
   setTimeout(() => {
      this.allowNewServer = true;
   }, 2000)
}

getPasswd() {
  return this.Passwd;
}

onCreateServer() {
  this.serverCreated=true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server was created! the server name is ' + this.serverName;
}

onUpdateServerName(event: Event) {
  // console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
 }
}

