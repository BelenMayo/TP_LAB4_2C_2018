import { Component, OnInit } from '@angular/core';
import { CaptchaComponent } from 'angular-captcha'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginComponent]
})

export class LoginComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

}
