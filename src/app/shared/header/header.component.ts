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
  company = '';
  subscr = new Subscription();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.subscr.add(this.authService.user.subscribe(user =>
      this.user = user,
    ));
  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

}
