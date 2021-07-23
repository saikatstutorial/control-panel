import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService
  ) { 
    this.form = _FormBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  signin(){
    console.log(this.form.value);
    if(this.form.valid){
      this._AuthService.signin(this.form.value.email, this.form.value.password, 
        () => {
          console.log("success")
        }, 
        () => {
          console.log("failed")
        });
    }
  }

}
