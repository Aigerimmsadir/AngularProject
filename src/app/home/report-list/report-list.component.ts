import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';
import {ProviderService} from '../../shared/services/provider.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  form: FormGroup;
  reports=[];
  subscr = new Subscription();
  user:any;
  constructor(private authService:AuthService,private providerService:ProviderService) { }

  ngOnInit() {
    this.subscr.add(this.authService.user.subscribe(user => {
        this.user = user;
          console.log(user)
      }
    ));
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });
    this.providerService.report_list().subscribe(res => {
      this.reports = res;
      console.log(this.reports);
    });
  }

}
