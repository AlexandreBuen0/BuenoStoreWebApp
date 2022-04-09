import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  usuariologado(){
    let token =  localStorage.getItem('AccessToken');
    if (token !== null) {
      return true;
    }

    return false;
  }

  sair() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
