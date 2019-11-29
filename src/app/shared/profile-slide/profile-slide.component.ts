import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProviderService } from '../services/provider.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-profile-slide',
  templateUrl: './profile-slide.component.html',
  styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent implements OnInit {

  constructor(private authService: AuthService, private providerService: ProviderService,
              public dialogRef: MatDialogRef<ProfileSlideComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  user: any;
  head: any;
  ngOnInit() {
    this.providerService.user_detail(parseInt(this.data.user_id)).subscribe(user => {
      this.user = user;
      console.log(user);
      this.providerService.user_detail(parseInt(this.user.profile.head)).subscribe(head => {
        this.head = head;
        console.log(head.profile.avatar)

      })
    });
  }

}
