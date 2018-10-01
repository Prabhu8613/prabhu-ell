import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CampaignComponent } from './campaign/campaign.component';
import { UserService } from './campaign/user-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CampaignComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
