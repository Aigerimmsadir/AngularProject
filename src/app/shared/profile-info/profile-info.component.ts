import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileSlideComponent } from '../profile-slide/profile-slide.component';
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) {
  }

  user: any;
  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileSlideComponent, {
      data:{
        user_id:this.user.id
      },
      width: '1000px',
      height: '100000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    this.authService.user.next(null);
  }
}
