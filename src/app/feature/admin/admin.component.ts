import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userData: any = null;
  constructor(
    private _AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.userData = this._AuthService.getUserData();
  }

  signout() {
    this._AuthService.signout();
  }

}
