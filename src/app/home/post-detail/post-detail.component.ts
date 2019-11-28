import { Component, OnInit ,Input} from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  animations: [
    trigger('Appear', [
      transition(':enter',  [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
    ]),
  ] 
})
export class PostDetailComponent implements OnInit {

  constructor(private providerService:ProviderService) { }
  @Input() post_id: any;
post:any;
  ngOnInit() {
    this.providerService.post_detail(parseInt(this.post_id)).subscribe(post=>{
      this.post=post
    })
  }

}
