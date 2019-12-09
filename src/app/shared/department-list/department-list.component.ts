import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ProviderService} from '../services/provider.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {ProfileSlideComponent} from '../profile-slide/profile-slide.component';
import {DepartmentProfilesComponent} from '../department-profiles/department-profiles.component';
import {ProfileShortComponent} from '../profile-short/profile-short.component';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
departments=[];
  subscr = new Subscription();
  user:any;
  constructor(private authService:AuthService,private providerService:ProviderService, public dialog: MatDialog) { }

  ngOnInit() {

          this.user=JSON.parse(localStorage.user)

      // this.providerService.departments_of_company(this.user.profile.department).subscribe(departments=>{
      //   this.departments=departments
      //   console.log(departments)
      // })


  }
  openDialog(department_id: number): void {
    console.log(department_id)
    const dialogRef = this.dialog.open(ProfileShortComponent, {
      data: {
        dep_id: department_id
      },
      width: '1000px',
      height: '100000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
