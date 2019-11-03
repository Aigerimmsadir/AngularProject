import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any;
  isAuthorized = new BehaviorSubject<any>(null);
  constructor(private authService: AuthService) {
  }

  get token(): string {
    return localStorage.getItem('Token');
  }

  company = '';
  subscr: any;

  ngOnInit() {
    this.subscr = this.authService.user.subscribe(user => {
      this.user = user;
    });
  }


  isUser() {
    console.log('hereis' + this.user.username);
    if (this.user) {
      return true;
    }
    return false;
  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

}
