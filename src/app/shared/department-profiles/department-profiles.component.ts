import { Component, OnDestroy,OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject, Subscription } from 'rxjs';
@Component({
  selector: 'app-department-profiles',
  templateUrl: './department-profiles.component.html',
  styleUrls: ['./department-profiles.component.scss']
})
export class DepartmentProfilesComponent implements OnInit {
  user:any;
  subscr = new Subscription();
  profiles={}
  departments:any
  company:any;
  constructor(private providerService:ProviderService,private authService:AuthService) { }
  ngOnInit() {
    this.subscr.add(this.authService.user.subscribe(user =>
      this.user = user));
      this.company=this.user.profiles.company;
      this.providerService.departments_of_company(this.company.id).subscribe(departments=>{
        this.departments=departments
      }
    );
  }
  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }
}
