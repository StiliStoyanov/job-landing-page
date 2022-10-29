import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService,
        private router: Router){

    }
    canActivate(): boolean {
    const user = this.authService.getLoggedUser()
    const org = this.authService.getLoggedOrg()

    if (!user && !org) {
        this.router.navigate(['login'])
        return false;
    }
    return true;
    }
}