import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  user: any;

  ngOnInit() {
    this.authService.currentUser().subscribe(res => {
      this.user = res;
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    this.authService.user.next(null);

  }
}
