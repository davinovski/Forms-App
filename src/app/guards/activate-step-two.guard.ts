import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SaveDataService } from '../services/save-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivateStepTwoGuard implements CanActivate {
  
  constructor(private saveDataService : SaveDataService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.saveDataService.checkValidity() ? this.router.navigate(['home']) : true;
  }
}
