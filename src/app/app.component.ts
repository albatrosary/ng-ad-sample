import { Component, OnInit } from '@angular/core';

import { Adal5Service } from 'adal-angular5';
import { adal } from 'adal-angular';

const config: adal.Config = {                           
  tenant: 'ashirasad.onmicrosoft.com',                      
  clientId: 'a2cc7d32-da13-4c0a-8bf7-49346c7bea67'    
}                                                       

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string;

  constructor(private service: Adal5Service) {      
    this.service.init(config);                      
  }    
  ngOnInit(){
    // Handle callback if this is a redirect from Azure
    this.service.handleWindowCallback();

    // Check if the user is authenticated. If not, call the login() method
    if (!this.service.userInfo.authenticated) {
      this.service.login();
    }

    // Log the user information to the console
    this.username = this.service.userInfo.username;
    console.log('profile', this.service.userInfo.profile);
  }

  // Logout Method
  public logout() {
    this.service.logOut();
  }
}
