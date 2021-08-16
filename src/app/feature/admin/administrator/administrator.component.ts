import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
  displayedColumns: string[] = ['email', 'uid', 'action'];
  form: FormGroup;
  dataSource: User[] = [];
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _UserService: UserService
  ) {
    this.form = _FormBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

    this.getAllUsers();
  }

  ngOnInit(): void {
    
  }

  getAllUsers(){
    this._UserService.getAllUsers().subscribe((users: any) => {
      console.log(users);
      this.dataSource = users;
    })
  }

  signup() {
    if (this.form.valid) {
      this._AuthService.signup(this.form.value.email, this.form.value.password,
        () => {
          console.log("success");
          alert("Success");
          this.form.reset();
        },
        () => {
          console.log("failed")
        });
    }
  }

  disable(user: User){
    let payload = user.userModel;
    payload.isDisabled = true;
    this._UserService.updateUser(user, payload).then((result) => {
      console.log("success");
      alert("Success");
    }, (error) => console.log(error));
  }

}
