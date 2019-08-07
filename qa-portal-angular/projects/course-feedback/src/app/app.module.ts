import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QaCommonModule} from '../../../qa-common/src/app/app.module';
import { TraineeCourseEvaluationComponent } from './trainee-course-evaluation/trainee-course-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    TraineeCourseEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QaCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class CourseFeedbackSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}