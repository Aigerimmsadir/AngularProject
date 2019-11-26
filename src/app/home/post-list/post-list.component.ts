import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/shared/services/auth.service';
import {ProviderService} from 'src/app/shared/services/provider.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private authService: AuthService, private providerService: ProviderService) {
  }

  posts = [];
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });
    this.providerService.post_list().subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  onSubmit() {
    console.log(this.form.value);
    var form_value = this.form.value;
    form_value.user_ids = [];
    form_value.documents_uploaded = [];

    this.providerService.post_create(form_value).subscribe(res => {
      this.posts.unshift(res);
      this.form.reset();
    });
  }

}
