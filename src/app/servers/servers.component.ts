import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = 'test';
  userName = '';

  constructor() {  
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);
    
  }

  ngOnInit() {
  }

  createUser() {
    this.userName = '';
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created: ' + this.serverName;
  }

  onUpdateServerName() {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}