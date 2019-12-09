import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProviderService} from '../services/provider.service';
import {ProfileSlideComponent} from '../profile-slide/profile-slide.component';
import {MatDialog} from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-profile-short',
  templateUrl: './profile-short.component.html',
  styleUrls: ['./profile-short.component.scss']
})
export class ProfileShortComponent implements OnInit {
  @Input() dep_id=1
  profiles: any;
  users = [];

  constructor(private providerService: ProviderService, public dialog: MatDialog, public dialogRef: MatDialogRef<ProfileSlideComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    if(this.data) {
      this.providerService.profiles_of_department(this.data.dep_id).subscribe(profiles => {
        this.profiles = profiles;

        for (var i = 0; i < this.profiles.length; i++) {
          this.providerService.get_user(this.profiles[i].id).subscribe(user => {
            this.users.push(user);
            console.log(this.users);
          });
        }
        ;
      });
    }
    else{
      this.providerService.profiles_of_department(this.dep_id).subscribe(profiles => {
        this.profiles = profiles;

        for (var i = 0; i < this.profiles.length; i++) {
          this.providerService.get_user(this.profiles[i].id).subscribe(user => {
            this.users.push(user);
            console.log(this.users);
          });
        }
        ;
      });
    }
  }

  getFullAddress(add) {
    console.log('http://127.0.0.1:8000' + add);
    return 'http://127.0.0.1:8000' + add;
  }

  openDialog(user_id: number): void {
    console.log(user_id)
    const dialogRef = this.dialog.open(ProfileSlideComponent, {
      data: {
        user_id: user_id
      },
      width: '1000px',
      height: '100000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

