import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    //this.authService.token
    //this.auth
    const cred = this.form.value;
    this.authService.login(cred).
      pipe(
        mergeMap(result => {
          this.authService.token = result.token;
          return this.authService.currentUser();
        }),
      ).
    subscribe(
      user => {
        console.log(user);
        this.authService.user.next(user);
      },
      error => {
        // handle error
      }
    );
  }

}
