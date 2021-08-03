import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

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

}
