import {
  Component, ComponentFactoryResolver, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ProviderService} from '../services/provider.service';
import {AuthService} from '../services/auth.service';
import {BehaviorSubject, Subscription} from 'rxjs';

import {Router} from '@angular/router';
import {ProfileShortComponent} from '../profile-short/profile-short.component';
import {ProfileSlideComponent} from '../profile-slide/profile-slide.component';


@Component({
  selector: 'app-department-profiles',
  templateUrl: './department-profiles.component.html',
  styleUrls: ['./department-profiles.component.scss']
})
export class DepartmentProfilesComponent implements OnInit {
  user: any;
  subscr = new Subscription();
  profiles = {};
  departments: any;
  company: any;

  constructor(private providerService: ProviderService, private authService: AuthService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  @ViewChild('container', {read: ViewContainerRef, static: true}) viewContainerRef: ViewContainerRef;

  ngOnInit() {
    this.subscr.add(this.authService.user.subscribe(user => {
        this.user = user;
        console.log(user);
        this.providerService.get_company(JSON.parse(localStorage.user).profile.id).subscribe(company => {
            this.company = company;
            this.providerService.departments_of_company(this.company.id).subscribe(departments => {
                this.departments = departments;
                console.log(departments);
                departments.forEach(department => {
                  this.providerService.profiles_of_department(department.id).subscribe(profiles => {
                    this.profiles[department] = profiles;
                    console.log(profiles);
                  });
                });
              }
            );
          }
        );
      }
      )
    );

  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

  openDepartment(department_id: any) {
    console.log(department_id);
    const factory = this.componentFactoryResolver.resolveComponentFactory(ProfileShortComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    ref.instance.dep_id=department_id
    console.log(ref.instance.dep_id)
  }
}
