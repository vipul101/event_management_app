import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = "";
  name: string = "";
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.username = this.authService.currentUser.username;
    this.name = this.authService.currentUser.name;
  }

  logout() {
    this.authService.deleteToken();
  }
}
