import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  posts: any[];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('kek');
      return;
    }
    //this.authService.token
    //this.auth
    const cred = this.form.value;
    this.authService.login(cred).pipe(
      mergeMap(result => {
        console.log(result);
        this.authService.token = result.token;
        return this.authService.currentUser();
      })
    ).subscribe(
      user => {
        console.log(user);
        this.authService.user.next(user);
        console.log('user', this.authService.user.value);
        this.router.navigate(['posts']);
      },
      error => {
        // handle error
      }
    );
  }

}
