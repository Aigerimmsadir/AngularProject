import {Component, Input, OnInit} from '@angular/core';
import {ProviderService} from '../../shared/services/provider.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ProfileSlideComponent} from 'src/app/shared/profile-slide/profile-slide.component';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() post_id: any;
  comments = [];
  form: FormGroup;
  subscr = new Subscription();
  user: any;

  constructor(private authService: AuthService, private providerService: ProviderService, public dialog: MatDialog) {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.subscr.add(this.authService.user.subscribe(user =>
      this.user = user,
    ));
    this.providerService.comment_list(parseInt(this.post_id)).subscribe(res => {
      this.comments = res;
      console.log(res);
    });
  }

  openDialog(user_id: any): void {
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

  onSubmit() {
    console.log(this.form.value);
    this.providerService.comment_create(this.post_id, this.form.value).subscribe(res => {
      this.comments.unshift(res);
      this.form.reset();
    });
  }

  deleteMyComment(comment_id: any) {
    this.providerService.comment_delete(parseInt(comment_id)).subscribe(res => {
      console.log(res);
      this.comments = this.comments.filter(comment => comment.id != comment_id);
    });
  }

  isMyComment(comment: any) {
    return comment.author.id == this.user.id;
  }
}

