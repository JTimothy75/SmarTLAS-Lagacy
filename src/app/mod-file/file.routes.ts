import { Routes } from "@angular/router";
import { LandFileComponent } from './land-file/land-file.component';
// import { Error404Component } from '../mod-shared/errors/404.component';
import { FileRouteActivator } from './land-file/file-route-activator.service';
import { CreateLandFileComponent } from './land-file/create-land-file.component';


export const fileRoutes: Routes = [
    { path: 'landfile/:id', component: LandFileComponent, canActivate: [FileRouteActivator] },
    {path: 'create-land-file', component: CreateLandFileComponent}
]