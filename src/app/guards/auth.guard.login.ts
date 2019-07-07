import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../api/firebase-auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuardLogin implements CanActivate{
    constructor(public router:Router, public fireAuth:FirebaseAuthService){}

    canActivate(
         next: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            if(!this.fireAuth.onAuthenticated()){
                return true;
              }
              this.router.navigate(['/tabla']);
              return false;
    }
    
}