import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

    socio: boolean = false;
    cliente: boolean = false;
    mozo: boolean = false;
    cocinero: boolean = false;
    bartender: boolean = false;

  constructor() { }
}