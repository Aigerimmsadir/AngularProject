import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-profile-slide',
  templateUrl: './profile-slide.component.html',
  styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent implements OnInit {

  constructor(private authService: AuthService,private providerService:ProviderService) { }
  user: any;
  head:any;
  head_us:any
  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
      console.log(user);
      this.providerService.profile_detail(parseInt(this.user.profile.head)).subscribe(head=>{
        this.head=head;
        this.providerService.user_detail(parseInt(this.head.user)).subscribe(us=>{
this.head_us=us
        })
        
      })
    });
  }

}
