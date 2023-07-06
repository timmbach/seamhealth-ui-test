import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { ComplaintsComponent } from './pages/feedback/components/complaints/complaints.component';
import { CommendationsComponent } from './pages/feedback/components/commendations/commendations.component';

const routes: Routes = [
  { path: '', redirectTo: '/feedback', pathMatch: 'full' },
  {
    path: 'feedback',
    component: FeedbackComponent,
    children: [
      {
        path: 'feedback',
        redirectTo: 'feedback/complaints',
      },
      { path: 'complaints', component: ComplaintsComponent },
      {
        path: 'commendations',
        component: CommendationsComponent,
      },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configurations', component: ConfigurationsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'account-management', component: AccountManagementComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
