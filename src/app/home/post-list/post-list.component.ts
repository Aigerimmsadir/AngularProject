import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProviderService } from 'src/app/shared/services/provider.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private authService:AuthService,private providerService:ProviderService) { }
  posts=[]
  ngOnInit() {
   this.providerService.post_list().subscribe(res=>{
     console.log(res)
     this.posts=res
   })
  }

}
