import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ComplaintsComponent } from './pages/feedback/components/complaints/complaints.component';
import { CommendationsComponent } from './pages/feedback/components/commendations/commendations.component';
import { HttpClientModule } from '@angular/common/http';
import { ComplaintsService } from 'src/services/complaints.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    DashboardComponent,
    ConfigurationsComponent,
    ContactsComponent,
    ReportsComponent,
    AccountManagementComponent,
    SidebarComponent,
    LogoComponent,
    LogoutComponent,
    ComplaintsComponent,
    CommendationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ComplaintsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
