
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../mod-shared/shared.module';
import { fileRoutes } from './file.routes';

import { FileNavBarComponent } from './land-file/file-navbar.component';
import { LandFileComponent } from './land-file/land-file.component';
import { FileBriefComponent } from './land-file/file-brief/file-brief.component';
import { FileRouteActivator } from './land-file/file-route-activator.service';
import { CreateLandFileComponent } from './land-file/create-land-file.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(fileRoutes),
        ShareModule
    ],

    declarations: [
        FileNavBarComponent,
        LandFileComponent,
        FileBriefComponent,
        CreateLandFileComponent
    ],

    providers: [ FileRouteActivator],
})
export class FileModule { }

