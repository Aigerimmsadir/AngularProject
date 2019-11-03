import {Component, Input, OnInit} from '@angular/core';
import {ProviderService} from '../../shared/services/provider.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() post_id: any;
  comments = [];
  form: FormGroup;
  constructor(private providerService: ProviderService) {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.providerService.comment_list(parseInt(this.post_id)).subscribe(res => {
      this.comments =res;
      console.log(res);
    });
  }
  onSubmit() {
    console.log(this.form.value);
    this.providerService.comment_create(this.post_id, this.form.value).subscribe(res => {
      this.comments.unshift(res);
      this.form.reset();
    });
  }
}
