import { Component, OnInit } from '@angular/core';
import { Swal } from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hola(){
    Swal.fire('Any fool can use a computer');
  }

}
