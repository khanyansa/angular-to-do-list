import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loggedUser : any;

  constructor(private _router: Router){
     const localuser = localStorage.getItem('loggedUser');
     if(localuser != null){
      this.loggedUser = JSON.parse(localuser);

     }
  }

  onLogOut(){
    localStorage.removeItem('loggedUser');
    
  }

}
