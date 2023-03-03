import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LandFileService } from './Shared/land-file.service';

@Injectable()
export class FileRouteActivator implements CanActivate{
    constructor(private landFileService: LandFileService, private router: Router){

    }

    canActivate( route: ActivatedRouteSnapshot ) {
        const fileExist = !!this.landFileService.getFileData(+route.params['id'])

        if (!fileExist)
            this.router.navigate(['/404'])
        return fileExist
    }
}

