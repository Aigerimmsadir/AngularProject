import {ProviderService} from '../shared/services/provider.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DepartmentsResolver implements Resolve<any> {
  user: any;

  constructor(private providerService: ProviderService, private router: Router) {

    this.user = JSON.parse(localStorage.user)

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('here')
    return this.providerService.departments_of_company(this.user.profile.department)

  }
}
