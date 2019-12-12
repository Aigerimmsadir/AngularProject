import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProviderService } from 'src/app/shared/services/provider.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {BehaviorSubject, Subscription} from 'rxjs';
@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  form: FormGroup;
  constructor(private authService:AuthService,private providerService:ProviderService,private router: Router) { }
user:any;
subscr = new Subscription();
  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('root', [Validators.required, Validators.maxLength(45)]),

    });
    this.subscr.add(this.authService.user_check.subscribe(user=>{
  this.user=user
  console.log(  this.user)
}))

  }
  onSubmit() {
    if (!this.form.valid) {
      console.log('kek');
      return;
    }
    var cred = this.form.value;
    cred.email=this.user.email
    this.authService.login(cred).subscribe(
      result => {
        this.authService.token = result.access;
        localStorage.setItem('user',JSON.stringify(result.user))

        this.authService.refresh_token = result.refresh;
        this.authService.user.next(result.user);
        this.router.navigate(['posts']);
      },
      error => {
        // handle error
      }
    );
  }
  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }
}
