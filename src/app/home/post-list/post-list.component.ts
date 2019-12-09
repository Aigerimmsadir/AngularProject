import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from 'src/app/shared/services/auth.service';
import {ProviderService} from 'src/app/shared/services/provider.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {
  trigger,
  style,
  animate,
  state,
  transition,
} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import {ProfileSlideComponent} from 'src/app/shared/profile-slide/profile-slide.component';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  animations: [
    trigger('Move', [
      transition(':enter', [
        style({paddingLeft: '400px', opacity: 0.25}),
        animate('8s', style({paddingLeft: '20px', opacity: 1})),
      ]),
    ]),
  ]
})
export class PostListComponent implements OnInit, OnDestroy {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private authService: AuthService, private providerService: ProviderService, public dialog: MatDialog) {
  }

  isOpen = true;
  subscr = new Subscription();

  toggle() {
    this.isOpen = !this.isOpen;
  }

  posts = [];
  form: FormGroup;
  searchForm:FormGroup
  user: any;
  employees=[]
  ngOnInit() {
    this.subscr.add(this.authService.user.subscribe(user => {
        this.user = user

      }
    ));
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
    });
    this.providerService.post_list().subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
    this.providerService.company_employees(JSON.parse(localStorage.user).profile.id).subscribe(users=>{
      this.employees=users;
      this.toppingList = users
    })
  }

  onSubmit() {

    var form_value = this.form.value;
    if(this.toppings.value)
    form_value.user_ids =this.toppings.value
    else
      form_value.user_ids =[]
    form_value.documents_uploaded = [];

    this.providerService.post_create(form_value).subscribe(res => {
      this.posts.unshift(res);
      this.form.reset();
    });
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

  deleteMyPost(post_id: any) {
    this.providerService.post_delete(parseInt(post_id)).subscribe(res => {
      console.log(res);
      this.posts = this.posts.filter(post => post.id != post_id);
    });
  }

  isMyPost(post) {

    return post.author.id == this.user.id;
  }
  onSearch(){

  }
  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }
}
