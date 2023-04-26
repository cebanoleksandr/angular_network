import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {UserLogin} from '../../interfaces/common-interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      rememberMe: new FormControl(false)
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const user: UserLogin = this.form.value;

    this.authService.login(user)
      .subscribe(response => {
        if (response.resultCode === 0) {
          this.authService.initCurrentUser();

          this.authService.authData.subscribe(res => {
            if (res) {
              this.router.navigate(['/news']);
            } else {
              console.log('One more error');
            }
          });
        } else if (response.resultCode === 10) {
          console.log('Enter captcha');
        } else {
          console.log('Some error');
        }
      });
  }
}
