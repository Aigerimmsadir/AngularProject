import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('Appear', [
      transition(':enter',  [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
    ]),
  ]
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  posts: any[];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('admin@gmail.com', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('root', [Validators.required, Validators.maxLength(20)]),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('kek');
      return;
    }
    const cred = this.form.value;
    this.authService.login(cred).subscribe(
      result => {
        this.authService.token = result.access;
        this.authService.refresh_token = result.refresh;
        this.authService.user.next(result.user);
        this.router.navigate(['posts']);
      },
      error => {
        // handle error
      }
    );
  }

}
