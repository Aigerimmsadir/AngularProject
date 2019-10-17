import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any;
  subscriptions = new Subscription();

  constructor(private authService: AuthService) { }
  get token(): string {
    return localStorage.getItem('Token');
  }
  ngOnInit() {
    // this.subscriptions.add(
    //   this.authService.userAsObservable().subscribe(user => {
    //     this.user = user;
    //     console.log(user)
    //   })
    // );
    this.authService.currentUser().subscribe(res=>{
      this.user=res
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
