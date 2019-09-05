import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalHomeSharedModule } from '../../../portal-home/src/app/app.module';
import { QaErrorSharedModule } from '../../../qa-error-app/src/app/app.module';
import { CourseFeedbackSharedModule } from '../../../course-feedback/src/app/app.module';
import { SelfReflectionSharedModule } from '../../../self-reflection/src/app/app.module';
import { AppAuthGuard } from './_common/guards/app-auth-guard';
import { QaCvSharedModule } from 'projects/qa-cv/src/app/qa-cv.module';
import { QaUserAdminSharedModule } from 'projects/qa-user-admin/src/app/qa-user-admin.module';

const routes: Routes = [
  // Add routes for new application here
  {
    path: 'qa/portal',
    loadChildren: () => CourseFeedbackSharedModule
  },
  {
    path: 'qa/portal/training',
    loadChildren: () => SelfReflectionSharedModule
  },
  {
    path: 'qa/portal/cv',
    loadChildren: () => QaCvSharedModule
  },
  {
    path: 'qa/portal/home',
    loadChildren: () => PortalHomeSharedModule
  },
  {
    path: 'qa/portal/admin',
    loadChildren: () => QaUserAdminSharedModule
  },
  {
    path: 'qa',
    children: [
      { path: '**', redirectTo: '/qa/portal/home' }
    ]
  },
  {
    path: '', redirectTo: '/qa/portal/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PortalHomeSharedModule.forRoot(),
    SelfReflectionSharedModule.forRoot(),
    QaCvSharedModule.forRoot(),
    QaUserAdminSharedModule.forRoot()
  ],
  providers: [AppAuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
