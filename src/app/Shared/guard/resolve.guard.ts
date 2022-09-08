import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
 
  constructor(private commonService : CommonService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.commonService.userData; 
  }
  
}
