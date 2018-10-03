import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CampaignComponent } from './campaign/campaign.component';
import { UserService } from './campaign/user-service';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomerComponent } from './customer/customer.component';
import { EmailComponent } from './email/email.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'email', component: EmailComponent },
  { path: '', component: DashboardComponent }  
];
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CampaignComponent,
    DashboardComponent,
    ContactsComponent,
    CustomerComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
