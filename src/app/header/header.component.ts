import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    this.authService.authStatus$.subscribe(value=>{
      this.isLoggedIn = value;
    }
    )
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
