import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Observable} from 'rxjs';
import {ProviderService} from '../services/provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any;
  company: any;
  subscr = new Subscription();

  constructor(private authService: AuthService, private providerService: ProviderService) {
  }

  ngOnInit() {
    this.subscr.add(this.authService.user.subscribe(user => {
        this.user = user;
        console.log(this.user)

      }
    ));
    this.providerService.get_company(JSON.parse(localStorage.user).profile.id).subscribe(company=>{
      this.company=company
    })

  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

}
