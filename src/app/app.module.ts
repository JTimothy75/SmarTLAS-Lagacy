import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './mod-shared/shared.module';

import { SmartlisAppComponent } from './smartlis-app.component';
import { AppNavBarComponent } from './nav/app-navbar.component';
import { SmartlisHomeComponent } from './smartlis-home/smartlis-home.component';
import { appRoutes } from './routes';
import { LandFileService } from './mod-file/land-file/Shared/land-file.service';


@NgModule({
  declarations: [
    SmartlisAppComponent,
    AppNavBarComponent,
    SmartlisHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ShareModule
  ],
  providers: [LandFileService, ],
  bootstrap: [SmartlisAppComponent]
})
export class AppModule { }
